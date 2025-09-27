// import mongoose from "mongoose";
// import Booking from "../models/booking.js";
// import Show from "../models/show.js"; // assuming you have a Show model


// import Stripe from "stripe";
// import { Mode } from "inngest/helpers/env";


// // Transaction-safe seat booking
// const checkSeatsAvailabilityAndBook = async (showId, selectedSeats, userId) => {
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     // 1. Get the show details (lock with session)
//     const showData = await Show.findById(showId)
//       .populate("movie")
//       .session(session)
//       .exec();

//     if (!showData) {
//       await session.abortTransaction();
//       session.endSession();
//       return { success: false, message: "Show not found" };
//     }

//     // Ensure occupiedSeats exists
//     if (!showData.occupiedSeats) {
//       showData.occupiedSeats = {};
//     }

//     // 2. Check already occupied seats
//     const bookedSeats = Object.keys(showData.occupiedSeats);
//     const unavailableSeats = selectedSeats.filter((seat) =>
//       bookedSeats.includes(seat)
//     );

//     if (unavailableSeats.length > 0) {
//       await session.abortTransaction();
//       session.endSession();
//       return {
//         success: false,
//         message: "Some seats are already booked",
//         unavailableSeats,
//       };
//     }

//     // 3. Create new booking
//     const booking = await Booking.create(
//       [
//         {
//           user: userId,
//           show: showId,
//           amount: showData.price * selectedSeats.length,
//           seats: selectedSeats,
//         },
//       ],
//       { session }
//     );

//     // 4. Mark selected seats as occupied
//     selectedSeats.forEach((seat) => {
//       showData.occupiedSeats[seat] = userId;
//     });

//     showData.markModified("occupiedSeats");
//     await showData.save({ session });

//     // Strip Gateway
// const strioeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

// //creating line items to for Strip 

// const line_items =[{
//   price_data;{
//     currency : 'usd',
//     product_data ;{
//       name:showData.movie.title
//     },
//     unit_amount : matchMedia.floor(booking.amount)*100
//   },quantity :1
// }]

// const session = await stripeInstance.checkout.session.create9{
//   success_url : `${origin}/loading/my-bookings`,
//   cancel_url :`${origin}/loading/my-booking`,
//   line_items : line_items
// ,
// Mode: "payment",

// metadata: {
//   bookingId : booking._id.toString()
// }
// expire_at : Math.floor(Date.now()/1000)+30*60
// }

// booking.paymentLink = session .url 
// await booking.save()
//     // 5. Commit transaction
//     await session.commitTransaction();
//     session.endSession();

//     return {
//       success: true,
//       message: "session",
//       booking: booking[0],
//     };

//   } 
  
//   catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     console.error("Error booking seats:", error);

//     return {
//       success: false,
//       message: "Something went wrong while booking seats",
//       error,
//     };
//   }
// };







// // Controller to get occupied seats for a show
// export const getOccupiedSeats = async (req, res) => {
//   try {
//     const { showId } = req.params;

//     const showData = await Show.findById(showId);
//     if (!showData) {
//       return res.status(404).json({
//         success: false,
//         message: "Show not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       occupiedSeats: showData.occupiedSeats || {},
//     });
//   } catch (error) {
//     console.error("Error fetching occupied seats:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Something went wrong while fetching occupied seats",
//       error,
//     });
//   }
// };

// export default checkSeatsAvailabilityAndBook;


// server/controllers/bookingController.js

import mongoose from "mongoose";
import Booking from "../models/booking.js";
import Show from "../models/show.js";
import Stripe from "stripe";

// ✅ Safe Stripe initialization
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined in your .env");
}
const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Transaction-safe seat booking
 * @param {String} showId - ID of the show
 * @param {Array} selectedSeats - Array of seat numbers
 * @param {String} userId - ID of the user booking
 * @param {String} origin - Frontend origin URL for success/cancel
 */
const checkSeatsAvailabilityAndBook = async (showId, selectedSeats, userId, origin) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // 1️⃣ Fetch show with movie details
    const showData = await Show.findById(showId)
      .populate("movie")
      .session(session)
      .exec();

    if (!showData) {
      await session.abortTransaction();
      session.endSession();
      return { success: false, message: "Show not found" };
    }

    // 2️⃣ Initialize occupiedSeats if not present
    if (!showData.occupiedSeats) showData.occupiedSeats = {};

    // 3️⃣ Check for already booked seats
    const bookedSeats = Object.keys(showData.occupiedSeats);
    const unavailableSeats = selectedSeats.filter(seat => bookedSeats.includes(seat));
    if (unavailableSeats.length > 0) {
      await session.abortTransaction();
      session.endSession();
      return {
        success: false,
        message: "Some seats are already booked",
        unavailableSeats
      };
    }

    // 4️⃣ Create booking document
    const booking = await Booking.create([{
      user: userId,
      show: showId,
      amount: showData.price * selectedSeats.length,
      seats: selectedSeats
    }], { session });

    // 5️⃣ Mark seats as occupied
    selectedSeats.forEach(seat => {
      showData.occupiedSeats[seat] = userId;
    });
    showData.markModified("occupiedSeats");
    await showData.save({ session });

    // 6️⃣ Create Stripe checkout session
    const line_items = [
      {
        price_data: {
          currency: "usd",
          product_data: { name: showData.movie.title },
          unit_amount: Math.floor(booking[0].amount * 100), // amount in cents
        },
        quantity: 1
      }
    ];

    const stripeSession = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${origin}/loading/my-bookings`,
      cancel_url: `${origin}/loading/my-bookings`,
      metadata: { bookingId: booking[0]._id.toString() },
    });

    // 7️⃣ Save payment link in booking
    booking[0].paymentLink = stripeSession.url;
    await booking[0].save({ session });

    // 8️⃣ Commit transaction
    await session.commitTransaction();
    session.endSession();

    return {
      success: true,
      message: "Booking created successfully",
      booking: booking[0],
      paymentLink: stripeSession.url
    };

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error booking seats:", error);
    return {
      success: false,
      message: "Something went wrong while booking seats",
      error
    };
  }
};

/**
 * Controller to get occupied seats for a show
 */
export const getOccupiedSeats = async (req, res) => {
  try {
    const { showId } = req.params;
    const showData = await Show.findById(showId);
    if (!showData) {
      return res.status(404).json({ success: false, message: "Show not found" });
    }
    return res.status(200).json({
      success: true,
      occupiedSeats: showData.occupiedSeats || {}
    });
  } catch (error) {
    console.error("Error fetching occupied seats:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching seats",
      error
    });
  }
};

export default checkSeatsAvailabilityAndBook;
