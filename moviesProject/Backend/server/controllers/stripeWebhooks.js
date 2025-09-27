import Stripe from "stripe";
import Booking from "../models/booking.js";

export const stripeWebhooks = async (req, res) => {
  const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    // ✅ Verify the webhook signature
    event = stripeInstance.webhooks.constructEvent(
      req.body, // raw body!
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error.message);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object;

        // ✅ Find the checkout session for this paymentIntent
        const sessionList = await stripeInstance.checkout.sessions.list({
          payment_intent: paymentIntent.id,
          limit: 1,
        });

        const session = sessionList.data[0];
        if (!session) {
          console.error(
            "No checkout session found for payment intent:",
            paymentIntent.id
          );
          break;
        }

        // Retrieve booking ID stored in session metadata
        const bookingId = session.metadata?.bookingId;
        if (!bookingId) {
          console.error("No bookingId in session metadata");
          break;
        }

        // ✅ Update the booking as paid
        await Booking.findByIdAndUpdate(bookingId, { isPaid: true });
        console.log(`Booking ${bookingId} marked as paid.`);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Acknowledge receipt of the event
    res.sendStatus(200);
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(500).send("Internal Server Error");
  }
};
