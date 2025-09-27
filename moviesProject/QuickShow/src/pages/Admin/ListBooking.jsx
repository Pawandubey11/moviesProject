// src/pages/Admin/ListBooking.jsx
import React, { useEffect, useState } from "react";

const ListBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myBookings")) || [];
    setBookings(saved);
  }, []);

  if (bookings.length === 0) {
    return (
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">List of Bookings</h1>
        <p className="text-gray-600">⚠️ No bookings found</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-md overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">List of Bookings</h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Movie</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Seats</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Payment</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i} className="text-center hover:bg-gray-50">
              <td className="border p-2">{b.movieTitle}</td>
              <td className="border p-2">{b.date}</td>
              <td className="border p-2">{b.time}</td>
              <td className="border p-2">{b.seats.join(", ")}</td>
              <td className="border p-2">₹{b.seats.length * 350}</td>
              <td className="border p-2">
                {b.paid ? (
                  <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm">
                    Paid
                  </span>
                ) : (
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-md text-sm">
                    Pending
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBooking;
