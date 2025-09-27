import React from "react";
import MovieCard from "../components/MovieCard";
import { dummyShowsData } from "../assets/assets.js";

const Favorite = () => (
  <section className="py-10 px-5 bg-gray-900 min-h-screen">
    <h2 className="text-3xl font-bold text-white mb-6">⭐ All Movies</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {dummyShowsData.length > 0 ? (
        dummyShowsData.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={{
              title: movie.title,
              poster: movie.poster_path,
              year: movie.release_date?.split("-")[0],
              genres: movie.genres?.map((g) => g.name) || [],
              runtime: movie.runtime,
              rating: movie.vote_average,
            }}
          />
        ))
      ) : (
        <p className="text-white">No movies available</p>
      )}
    </div>
  </section>
);

export default Favorite;
