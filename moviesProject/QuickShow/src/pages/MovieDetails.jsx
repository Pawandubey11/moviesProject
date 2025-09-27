


import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // ⬅ added useNavigate
import { demoMovies } from "../components/NowShowing";
import { assets, dummyDateTimeData } from "../assets/assets";

const MovieDetails = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);

  const navigate = useNavigate(); // ⬅ initialize navigate

  useEffect(() => {
    const movie = demoMovies.find((m) => m.id === parseInt(id, 10));

    const showtimes = [];
    Object.values(dummyDateTimeData).forEach((dayArray) => {
      dayArray.forEach((slot) => {
        if (
          slot.showId === id ||
          slot.showId === String(id) ||
          slot.showId === movie?._id
        ) {
          showtimes.push(slot.time);
        }
      });
    });

    if (movie) setShowData({ movie, datetime: showtimes });
    else setShowData(null);
  }, [id]);

  if (!showData) {
    return (
      <div
        className="min-h-screen flex items-center justify-center text-white text-2xl"
        style={{
          backgroundImage: `url(${assets.heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        ⚠️ Show not found for id: {id}
      </div>
    );
  }

  const { movie, datetime } = showData;

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black via-[#0f0f1a] to-black text-white"
      style={{
        backgroundImage: `url(${assets.heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ---------- Hero Section ---------- */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-72 rounded-2xl shadow-2xl"
          />

          <div className="flex-1 space-y-5">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {movie.title}
            </h1>
            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>

            <div className="space-y-2 text-sm md:text-base">
              <p>
                <span className="font-semibold">Release Date:</span>{" "}
                {movie.release_date}
              </p>
              <p>
                <span className="font-semibold">Runtime:</span> {movie.runtime}{" "}
                min
              </p>
              <p>
                <span className="font-semibold">Rating:</span>{" "}
                {movie.vote_average} / 10 ({movie.vote_count} votes)
              </p>
            </div>

            {/* ---------- Available Times ---------- */}
            {datetime.length > 0 ? (
              <div className="pt-4">
                <h3 className="font-semibold mb-1">Available Times:</h3>
                <div className="flex flex-wrap gap-2">
                  {datetime.map((time, i) => (
                    <span
                      key={i}
                      className="bg-pink-600/80 hover:bg-pink-600 px-3 py-1 rounded-full text-sm"
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-400">No showtimes available</p>
            )}

            {/* ---------- Book Now Button ---------- */}
            <button
              onClick={() => navigate(`/seat-layout/${id}`)} // ⬅ go to SeatLayout
              className="mt-6 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full font-semibold shadow-lg transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* ---------- You May Also Like ---------- */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {demoMovies
            .filter((m) => m.id !== movie.id)
            .slice(0, 5)
            .map((m) => (
              <Link key={m.id} to={`/movies/${m.id}`}>
                <div className="bg-black/60 hover:bg-black/80 rounded-xl p-2 shadow-xl transition">
                  <img
                    src={m.poster}
                    alt={m.title}
                    className="rounded-md mb-2 h-40 w-full object-cover"
                  />
                  <p className="text-center text-sm font-medium">{m.title}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;





















