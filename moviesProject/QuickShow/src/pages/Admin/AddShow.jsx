import React, { useState } from "react";

const AddShow = () => {
  const [show, setShow] = useState({
    title: "",
    date: "",
    time: "",
    poster: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setShow({ ...show, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save shows in localStorage (later you can connect backend here)
    const savedShows = JSON.parse(localStorage.getItem("shows")) || [];
    savedShows.push(show);
    localStorage.setItem("shows", JSON.stringify(savedShows));

    alert("✅ Show Added Successfully!");
    setShow({ title: "", date: "", time: "", poster: "" }); // reset form
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Show</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 space-y-4 max-w-lg"
      >
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Movie Title
          </label>
          <input
            type="text"
            name="title"
            value={show.title}
            onChange={handleChange}
            placeholder="Enter movie name"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={show.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Time
          </label>
          <input
            type="time"
            name="time"
            value={show.time}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Poster URL
          </label>
          <input
            type="text"
            name="poster"
            value={show.poster}
            onChange={handleChange}
            placeholder="Paste image link"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
        >
          Add Show
        </button>
      </form>
    </div>
  );
};

export default AddShow;
