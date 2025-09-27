import React from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { formatRuntime } from "../lib/Timeformat"; // ✅ Import runtime formatter

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1c1c24] text-white rounded-2xl shadow-lg w-60 m-3 hover:scale-105 transition transform overflow-hidden">
      {/* Poster */}
      <img
        onClick={() => navigate(`/movies/${movie.id}`)}
        src={movie.poster}
        alt={movie.title}
        className="w-full h-72 object-cover cursor-pointer"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[150px]">
        {/* Title */}
        <h3 className="text-lg font-bold line-clamp-1">{movie.title}</h3>

        {/* Year | Genres | Runtime */}
        <p className="text-sm text-gray-400 mt-1">
          {movie.year} • {movie.genres.join(" | ")} •{" "}
          {formatRuntime(movie.runtime)}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-4">
          {/* Buy Tickets Button */}
          <button
            onClick={() => navigate(`/movies/${movie.id}`)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-sm rounded-full font-medium"
          >
            Buy Tickets
          </button>

          {/* Rating */}
          <div className="flex items-center text-gray-300">
            <Star className="w-4 h-4 text-red-400 mr-1" />
            <span className="text-sm">{movie.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
