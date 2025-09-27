import React, { useState } from "react";
import { Play } from "lucide-react";

// 20 demo trailers with working posters + YouTube video IDs
const trailers = [
  {
    id: 1,
    title: "Avengers",
    thumbnail: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
    videoId: "eOrNdBpGMv8",
  },
  {
    id: 2,
    title: "Justice League",
    thumbnail: "https://m.media-amazon.com/images/I/81D+KJkO3-L._AC_SY679_.jpg",
    videoId: "3cxixDgHUYw",
  },
  {
    id: 3,
    title: "Black Adam",
    thumbnail: "https://m.media-amazon.com/images/I/81u2kTuPZ6L._AC_SY679_.jpg",
    videoId: "X0tOpBuYasI",
  },
  {
    id: 4,
    title: "Thor: Ragnarok",
    thumbnail: "https://m.media-amazon.com/images/I/81fA5UdNRkL._AC_SY679_.jpg",
    videoId: "ue80QwXMRHg",
  },
  {
    id: 5,
    title: "Black Widow",
    thumbnail: "https://m.media-amazon.com/images/I/81w1jq31EOL._AC_SY679_.jpg",
    videoId: "ybji16u608U",
  },
  {
    id: 6,
    title: "Spider-Man: No Way Home",
    thumbnail: "https://m.media-amazon.com/images/I/91qvVYOjYpL._AC_SY679_.jpg",
    videoId: "JfVOs4VSpmA",
  },
  {
    id: 7,
    title: "Doctor Strange",
    thumbnail: "https://m.media-amazon.com/images/I/91aZDRjH-PL._AC_SY679_.jpg",
    videoId: "Lt-U_t2pUHI",
  },
  {
    id: 8,
    title: "Captain Marvel",
    thumbnail: "https://m.media-amazon.com/images/I/81ZxkO5zYUL._AC_SY679_.jpg",
    videoId: "Z1BCujX3pw8",
  },
  {
    id: 9,
    title: "Iron Man",
    thumbnail: "https://m.media-amazon.com/images/I/91zLb4vF+ML._AC_SY679_.jpg",
    videoId: "8hYlB38asDY",
  },
  {
    id: 10,
    title: "Captain America: Civil War",
    thumbnail: "https://m.media-amazon.com/images/I/81rSoh0sWNL._AC_SY679_.jpg",
    videoId: "dKrVegVI0Us",
  },
  {
    id: 11,
    title: "Guardians of the Galaxy",
    thumbnail: "https://m.media-amazon.com/images/I/91Y5f+uL4wL._AC_SY679_.jpg",
    videoId: "d96cjJhvlMA",
  },
  {
    id: 12,
    title: "Ant-Man",
    thumbnail: "https://m.media-amazon.com/images/I/81KcQ9aUu3L._AC_SY679_.jpg",
    videoId: "pWdKf3MneyI",
  },
  {
    id: 13,
    title: "Hulk",
    thumbnail: "https://m.media-amazon.com/images/I/81h1ZubvPJL._AC_SY679_.jpg",
    videoId: "xbqNb2PFKKA",
  },
  {
    id: 14,
    title: "Avengers: Endgame",
    thumbnail: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    videoId: "TcMBFSGVi1c",
  },
  {
    id: 15,
    title: "Avengers: Infinity War",
    thumbnail: "https://m.media-amazon.com/images/I/81AiA8kJ6aL._AC_SY679_.jpg",
    videoId: "6ZfuNTqbHE8",
  },
  {
    id: 16,
    title: "Shang-Chi",
    thumbnail: "https://m.media-amazon.com/images/I/81ZizZ0o2QL._AC_SY679_.jpg",
    videoId: "8YjFbMbfXaQ",
  },
  {
    id: 17,
    title: "Eternals",
    thumbnail: "https://m.media-amazon.com/images/I/91eMwbR7fpL._AC_SY679_.jpg",
    videoId: "x_me3xsvDgk",
  },
  {
    id: 18,
    title: "Venom",
    thumbnail: "https://m.media-amazon.com/images/I/81h1N02l4UL._AC_SY679_.jpg",
    videoId: "u9Mv98Gr5pY",
  },
  {
    id: 19,
    title: "Deadpool",
    thumbnail: "https://m.media-amazon.com/images/I/91FJ9xAVtLL._AC_SY679_.jpg",
    videoId: "ONHBaC-pfsk",
  },
  {
    id: 20,
    title: "The Batman",
    thumbnail: "https://m.media-amazon.com/images/I/81D+KJkO3-L._AC_SY679_.jpg",
    videoId: "mqqft2x_Aa4",
  },
];
const TrailerSection = () => {
  const [selected, setSelected] = useState(trailers[0]);

  const handleSelect = (trailer) => {
    setSelected(trailer);
  };

  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">🎬 Movie Trailers</h2>

      {/* Main Trailer */}
      <div className="relative w-full h-[400px] mb-6">
        <iframe
          src={`https://www.youtube.com/embed/${selected.videoId}?autoplay=1`}
          title={selected.title}
          className="w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Thumbnails (Scrollable) */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {trailers.map((trailer) => (
          <div
            key={trailer.id}
            className={`relative w-32 h-20 rounded-lg overflow-hidden cursor-pointer border-2 flex-shrink-0 ${
              selected.id === trailer.id
                ? "border-red-500"
                : "border-transparent"
            }`}
          >
            {/* Thumbnail Image */}
            <img
              src={trailer.thumbnail}
              alt={trailer.title}
              className="w-full h-full object-cover"
            />

            {/* Play Button Overlay using movie image */}
            <button
              onClick={() => handleSelect(trailer)}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition transform hover:scale-105"
            >
              <img
                src={trailer.thumbnail} // Movie image as the button background
                alt={`Play ${trailer.title}`}
                className="w-full h-full object-cover rounded-lg opacity-70"
              />
              <Play className="absolute w-6 h-6 text-white" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrailerSection;