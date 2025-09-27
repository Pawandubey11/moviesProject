// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myBookings")) || [];
    setBookings(saved);
  }, []);

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-200 text-xl bg-gradient-to-br from-blue-900 via-gray-900 to-black">
        ⚠️ No bookings available
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-10 text-cyan-400">
        🎟 Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking, idx) => (
          <div
            key={idx}
            className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow-xl hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">
              {booking.movieTitle}
            </h2>
            <p className="text-gray-300">
              <span className="font-semibold">Date:</span> {booking.date}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Time:</span> {booking.time}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Seats:</span>{" "}
              {booking.seats.join(", ")}
            </p>
            <p className="text-gray-200 mt-2">
              <span className="font-semibold">Total:</span> ₹
              {booking.totalPrice}
            </p>

            <span
              className={`mt-4 inline-block px-3 py-1 rounded-lg text-sm font-medium ${
                booking.paid ? "bg-green-600" : "bg-yellow-500 text-black"
              }`}
            >
              {booking.paid ? "✅ Paid" : "⏳ Pending"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminDashboard;
