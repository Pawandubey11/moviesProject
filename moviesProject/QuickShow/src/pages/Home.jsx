// import React from "react";
// import HeroSection from "../components/HeroSection";
// import FeaturedSection from "../components/FeaturedSection";
// import NowShowing from "../components/NowShowing";
// import TrailerSection from "../components/TrailerSection"; // ✅ Import TrailerSection

// const Home = () => {
//   return (
//     <div className="bg-black min-h-screen text-white">
//       {/* Hero Section */}
//       <HeroSection />
//       {/* Featured Section */}
//       <FeaturedSection />
//       {/* Now Showing Section */}
//       <NowShowing />
//       {/* Trailer Section */}
//       <TrailerSection /> {/* ✅ Added here */}
//     </div>
//   );
// };

// export default Home;












import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import NowShowing from "../components/NowShowing";
import TrailerSection from "../components/TrailerSection";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <HeroSection />
      {/* Featured Section */}
      <FeaturedSection />
      {/* Now Showing Section */}
      <NowShowing />
      {/* Trailer Section */}
      <TrailerSection />
    </div>
  );
};

export default Home;
