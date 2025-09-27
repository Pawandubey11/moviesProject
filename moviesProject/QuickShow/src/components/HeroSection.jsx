// import React from "react";
// import { PlayCircle, Clock, Film } from "lucide-react";
// import { assets } from "../assets/assets";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
//       {/* Background Image */}
//       <div
//   className="absolute inset-0 bg-cover bg-center"
//   style={{ backgroundImage: `url(${assets.heroBg})` }}
// />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl px-6 text-white">
//         {/* Marvel Logo */}
//         <img
//           src={assets.marvelLogo}
//           alt="Marvel Studios"
//           className="mx-auto w-52 md:w-60 mb-6 drop-shadow-lg hover:scale-105 transition-transform duration-300"
//         />

//         {/* Title */}
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide">
//           Welcome to <span className="text-red-500">QuickShow</span>
//         </h1>

//         {/* Description */}
//         <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-200">
//           <span className="font-semibold">
//             Guardians of the Galaxy Vol. 3 (2023)
//           </span>
//           is a superhero film based on the Marvel Comics team. The Guardians
//           must protect Rocket from his creator while facing their own personal
//           struggles.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
//           <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 flex items-center gap-2">
//             <PlayCircle className="w-6 h-6" />
//             Get Started
//           </button>

//           <button className="bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
//             Learn More
//           </button>
//         </div>

//         {/* Info Row */}
//         <div className="flex justify-center gap-8 text-gray-300 text-sm md:text-base">
//           <div className="flex items-center gap-2">
//             <Film className="w-5 h-5 text-red-400" />
//             <span>Action | Adventure | Sci-Fi</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Clock className="w-5 h-5 text-red-400" />
//             <span>2h 29m</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


































import React from "react";
import { PlayCircle, Clock, Film } from "lucide-react";
import { assets } from "../assets/assets";

/**
 * HeroSection
 * -----------
 * A cinematic landing section with:
 * - Full-screen background image
 * - Dark overlay for readability
 * - Marvel logo + movie intro
 * - CTA buttons & movie details
 */
const HeroSection = () => {
  return (
    <section
      className="
        relative w-full h-[90vh]
        flex items-center justify-center
        text-center overflow-hidden
      "
    >
      {/* ===== Background Image ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.heroBg})` }}
      />

      {/* ===== Dark Overlay for Readability ===== */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-4xl px-6 text-white">
        {/* --- Marvel Logo --- */}
        <img
          src={assets.marvelLogo}
          alt="Marvel Studios"
          className="
            mx-auto w-52 md:w-60 mb-6
            drop-shadow-lg
            hover:scale-105
            transition-transform duration-300
          "
        />

        {/* --- Main Title --- */}
        <h1
          className="
            text-4xl md:text-6xl font-extrabold mb-6 tracking-wide
          "
        >
          Welcome to <span className="text-red-500">QuickShow</span>
        </h1>

        {/* --- Movie Description --- */}
        <p
          className="
            text-base md:text-lg mb-8
            leading-relaxed text-gray-200
          "
        >
          <span className="font-semibold">
            Guardians of the Galaxy Vol. 3 (2023)
          </span>{" "}
          is a superhero film based on the Marvel Comics team. The Guardians
          must protect Rocket from his creator while facing their own personal
          struggles.
        </p>

        {/* --- Call-to-Action Buttons --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
          <button
            className="
              bg-red-600 hover:bg-red-700
              px-6 py-3 rounded-full text-lg font-semibold shadow-lg
              transition-all duration-300 flex items-center gap-2
            "
          >
            <PlayCircle className="w-6 h-6" />
            Get Started
          </button>

          <button
            className="
              bg-white/10 hover:bg-white/20
              border border-white/30
              px-6 py-3 rounded-full text-lg font-semibold
              transition-colors duration-300
            "
          >
            Learn More
          </button>
        </div>

        {/* --- Extra Info Row --- */}
        <div className="flex justify-center gap-8 text-gray-300 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-red-400" />
            <span>Action | Adventure | Sci-Fi</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-red-400" />
            <span>2h 29m</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
