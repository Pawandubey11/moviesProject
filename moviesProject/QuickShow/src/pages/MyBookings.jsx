







// src/pages/MyBookings.jsx
import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myBookings")) || [];
    setBookings(saved);
  }, []);

  const handleDelete = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem("myBookings", JSON.stringify(updated));
  };

  const handlePaymentToggle = (index) => {
    const updated = bookings.map((booking, i) =>
      i === index ? { ...booking, paid: !booking.paid } : booking
    );
    setBookings(updated);
    localStorage.setItem("myBookings", JSON.stringify(updated));
  };

  if (bookings.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl bg-gray-900">
        ⚠️ No bookings found
      </div>
    );

  return (
    <section className="py-10 px-5 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-8">My Bookings</h2>

      <div className="flex flex-col gap-6">
        {bookings.map((booking, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-5 bg-gray-800 rounded-xl"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{booking.movieTitle}</h3>
              <p className="mt-1">
                {booking.date} @ {booking.time}
              </p>
              <p className="mt-1">
                Seats: <span className="font-semibold">{booking.seats.join(", ")}</span>
              </p>
              <p className="mt-1">
                Total: ₹{booking.seats.length * 350}
              </p>
            </div>

            <div className="flex flex-col gap-2 md:items-end">
              <span
                className={`inline-block px-3 py-1 rounded-lg text-sm ${
                  booking.paid ? "bg-green-600" : "bg-yellow-500"
                }`}
              >
                {booking.paid ? "Paid" : "Pending Payment"}
              </span>

              <button
                onClick={() => handlePaymentToggle(idx)}
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
              >
                {booking.paid ? "Mark Unpaid" : "Mark Paid"}
              </button>

              <button
                onClick={() => handleDelete(idx)}
                className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white"
              >
                Delete Booking
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyBookings;

























