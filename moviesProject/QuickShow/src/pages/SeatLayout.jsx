






// // src/pages/SeatLayout.jsx
// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const SeatLayout = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Dummy data
//   const dummyDates = ["2025-09-17", "2025-09-18", "2025-09-19"];
//   const dummyTimes = ["06:30", "09:30", "12:00", "16:30", "18:00"];
//   const rows = ["A", "B", "C", "D", "E", "F", "G"];
//   const cols = Array.from({ length: 18 }, (_, i) => i + 1);

//   // States
//   const [selectedDate, setSelectedDate] = useState(dummyDates[0]);
//   const [selectedTime, setSelectedTime] = useState(dummyTimes[0]);
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   // Toggle seat selection
//   const toggleSeat = (seat) => {
//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   // Proceed to MyBookings
//   const handleCheckout = () => {
//     if (selectedSeats.length === 0) return; // Guard: cannot proceed without seats

//     const booking = {
//       movieId: id,
//       date: selectedDate,
//       time: selectedTime,
//       seats: selectedSeats,
//     };

//     // Save booking to localStorage
//     const saved = JSON.parse(localStorage.getItem("myBookings")) || [];
//     localStorage.setItem("myBookings", JSON.stringify([...saved, booking]));

//     // Navigate to MyBookings
//     navigate("/my-bookings");
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex">
//       {/* Sidebar: Dates & Times */}
//       <div className="w-1/4 bg-black bg-opacity-40 p-6">
//         <h2 className="text-lg font-semibold mb-4">Select Date</h2>
//         <div className="space-y-3 mb-6">
//           {dummyDates.map((date) => (
//             <button
//               key={date}
//               className={`w-full py-2 px-4 rounded-lg border text-left transition ${
//                 selectedDate === date
//                   ? "bg-red-600 border-red-500 text-white"
//                   : "bg-gray-800 border-gray-700 hover:bg-gray-700"
//               }`}
//               onClick={() => setSelectedDate(date)}
//             >
//               {date}
//             </button>
//           ))}
//         </div>

//         <h2 className="text-lg font-semibold mb-4">Select Time</h2>
//         <div className="space-y-3">
//           {dummyTimes.map((time) => (
//             <button
//               key={time}
//               className={`w-full py-2 px-4 rounded-lg border text-left transition ${
//                 selectedTime === time
//                   ? "bg-red-600 border-red-500 text-white"
//                   : "bg-gray-800 border-gray-700 hover:bg-gray-700"
//               }`}
//               onClick={() => setSelectedTime(time)}
//             >
//               {time}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Content: Seat Grid */}
//       <div className="flex-1 flex flex-col items-center p-10">
//         <h1 className="text-2xl font-bold mb-6">Select Your Seats</h1>

//         {/* Screen */}
//         <div className="w-3/4 h-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 rounded-full mb-10"></div>
//         <p className="mb-6 text-gray-400">SCREEN SIDE</p>

//         {/* Seats */}
//         <div className="flex flex-col gap-4">
//           {rows.map((row) => (
//             <div key={row} className="flex gap-2 justify-center">
//               {cols.map((col) => {
//                 const seat = `${row}${col}`;
//                 const isSelected = selectedSeats.includes(seat);
//                 return (
//                   <button
//                     key={seat}
//                     className={`w-8 h-8 rounded-md text-xs flex items-center justify-center transition ${
//                       isSelected
//                         ? "bg-red-500 text-white"
//                         : "bg-gray-700 hover:bg-gray-500"
//                     }`}
//                     onClick={() => toggleSeat(seat)}
//                   >
//                     {col}
//                   </button>
//                 );
//               })}
//             </div>
//           ))}
//         </div>

//         {/* Checkout */}
//         <div className="mt-10">
//           <button
//             onClick={handleCheckout}
//             disabled={selectedSeats.length === 0}
//             className="px-6 py-3 bg-red-600 rounded-full text-white font-semibold shadow-lg hover:bg-red-500 disabled:bg-gray-600"
//           >
//             Proceed to MyBookings →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SeatLayout;






// src/pages/SeatLayout.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { demoMovies } from "../components/NowShowing"; // ✅ to fetch movie details

const SeatLayout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy data
  const dummyDates = ["2025-09-17", "2025-09-18", "2025-09-19"];
  const dummyTimes = ["06:30", "09:30", "12:00", "16:30", "18:00"];
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const cols = Array.from({ length: 18 }, (_, i) => i + 1);

  // States
  const [selectedDate, setSelectedDate] = useState(dummyDates[0]);
  const [selectedTime, setSelectedTime] = useState(dummyTimes[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");

  // Fetch movie name from demoMovies
  useEffect(() => {
    const movie = demoMovies.find((m) => String(m.id) === String(id));
    if (movie) {
      setMovieTitle(movie.title);
    }
  }, [id]);

  // Toggle seat selection
  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  // Proceed to MyBookings
  const handleCheckout = () => {
    if (selectedSeats.length === 0) return; // Guard: cannot proceed without seats

    const ticketPrice = 350; // fixed price (can make dynamic later)

    const booking = {
      movieId: id,
      movieTitle, // ✅ save movie name
      date: selectedDate,
      time: selectedTime,
      seats: selectedSeats,
      totalPrice: selectedSeats.length * ticketPrice,
      paid: false, // ✅ default unpaid (for admin toggle)
    };

    // Save booking to localStorage
    const saved = JSON.parse(localStorage.getItem("myBookings")) || [];
    localStorage.setItem("myBookings", JSON.stringify([...saved, booking]));

    // Navigate to MyBookings
    navigate("/my-bookings");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex">
      {/* Sidebar: Dates & Times */}
      <div className="w-1/4 bg-black bg-opacity-40 p-6">
        <h2 className="text-lg font-semibold mb-4">Select Date</h2>
        <div className="space-y-3 mb-6">
          {dummyDates.map((date) => (
            <button
              key={date}
              className={`w-full py-2 px-4 rounded-lg border text-left transition ${
                selectedDate === date
                  ? "bg-red-600 border-red-500 text-white"
                  : "bg-gray-800 border-gray-700 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedDate(date)}
            >
              {date}
            </button>
          ))}
        </div>

        <h2 className="text-lg font-semibold mb-4">Select Time</h2>
        <div className="space-y-3">
          {dummyTimes.map((time) => (
            <button
              key={time}
              className={`w-full py-2 px-4 rounded-lg border text-left transition ${
                selectedTime === time
                  ? "bg-red-600 border-red-500 text-white"
                  : "bg-gray-800 border-gray-700 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Seat Grid */}
      <div className="flex-1 flex flex-col items-center p-10">
        <h1 className="text-2xl font-bold mb-2">Select Your Seats</h1>
        {movieTitle && (
          <p className="mb-6 text-gray-400">
            Booking for: <span className="font-semibold">{movieTitle}</span>
          </p>
        )}

        {/* Screen */}
        <div className="w-3/4 h-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 rounded-full mb-10"></div>
        <p className="mb-6 text-gray-400">SCREEN SIDE</p>

        {/* Seats */}
        <div className="flex flex-col gap-4">
          {rows.map((row) => (
            <div key={row} className="flex gap-2 justify-center">
              {cols.map((col) => {
                const seat = `${row}${col}`;
                const isSelected = selectedSeats.includes(seat);
                return (
                  <button
                    key={seat}
                    className={`w-8 h-8 rounded-md text-xs flex items-center justify-center transition ${
                      isSelected
                        ? "bg-red-500 text-white"
                        : "bg-gray-700 hover:bg-gray-500"
                    }`}
                    onClick={() => toggleSeat(seat)}
                  >
                    {col}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Checkout */}
        <div className="mt-10">
          <button
            onClick={handleCheckout}
            disabled={selectedSeats.length === 0}
            className="px-6 py-3 bg-red-600 rounded-full text-white font-semibold shadow-lg hover:bg-red-500 disabled:bg-gray-600"
          >
            Proceed to MyBookings →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeatLayout;
