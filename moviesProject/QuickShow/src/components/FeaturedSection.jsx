import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { dummyShowsData } from "../assets/assets";

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-[#0d0d0f]">
      {/* Cinematic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#0d0d0f] to-black opacity-95 -z-10"></div>

      {/* Subtle Glow Orbs */}
      <div className="absolute top-24 left-12 w-72 h-72 bg-indigo-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse -z-10"></div>
      <div className="absolute bottom-24 right-12 w-72 h-72 bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse -z-10"></div>

      {/* Content */}
      <div className="text-center text-white px-6 max-w-3xl">
        <h2 className="text-5xl font-extrabold mb-6 tracking-wide drop-shadow-[0_0_12px_rgba(255,0,150,0.5)]">
          🎬 Featured <span className="text-indigo-400">Movies</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Your one-stop destination for trending films, blockbusters, and
          exclusive premieres. Experience movies like never before.
        </p>






<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
    {dummyShowsData.slice(0, 3).map((show) => (
        <div key={show.id} className="bg-gray-800 bg-opacity-50 rounded-lg p-4 mb-4">
            <h3 className="text-2xl font-bold mb-2">{show.title}</h3>
        </div>
    ))} 
</div>







        <button
          onClick={() => navigate("/movies")}
          className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(99,102,241,0.7)] hover:scale-110 transition transform flex items-center gap-3 mx-auto"
        >
          Explore More
          <ArrowRight className="w-5 h-5" />
        </button >




      </div>
    </section>
  );
};

export default FeaturedSection;
