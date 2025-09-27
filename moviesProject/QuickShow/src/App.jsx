import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AdminLayout from "./components/Admin/AdminLayout.jsx";

// Pages - User
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import SeatLayout from "./pages/SeatLayout.jsx";
import Favorite from "./pages/Favorite.jsx";

// Pages - Admin
import AddShow from "./pages/Admin/AddShow.jsx";
import ListShows from "./pages/Admin/ListShows.jsx";
import ListBooking from "./pages/Admin/ListBooking.jsx";
import AdminHome from "./pages/Admin/dashboard.jsx";









import Loading from "./components/Loading.jsx";




// Context
import { useAppContext } from "./context/AppContext.jsx";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const { user, isAdmin } = useAppContext();

  return (
    <>
      {/* Fixed Header with Clerk auth buttons */}
      <header className="fixed w-full z-50 bg-white shadow p-2 flex justify-end gap-2">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <Toaster />

      {/* Navbar only for non-admin routes */}
      {!isAdminRoute && <Navbar />}

      <div className={!isAdminRoute ? "pt-16" : ""}>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/:id/:date" element={<MovieDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/seat-layout/:id" element={<SeatLayout />} />
          <Route path="/favorite" element={<Favorite />} />




          <Route path="/loading/:nextUrl" element={<Loading />} />
          <Route path="/loading" element={<Loading />} />
          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={isAdmin ? <AdminLayout /> : <Navigate to="/" replace />}
          >
            <Route path="" element={<AdminHome />} />
            <Route path="add-show" element={<AddShow />} />
            <Route path="list-shows" element={<ListShows />} />
            <Route path="list-bookings" element={<ListBooking />} />
          </Route>

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Footer only for non-admin routes */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;




// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import SeatLayout from "./pages/SeatLayout.jsx";
// import Favorite from "./pages/Favorite.jsx";
// import AddShow from "./pages/Admin/AddShow.jsx";
// import ListShows from "./pages/Admin/ListShows.jsx";
// import ListBooking from "./pages/Admin/ListBooking.jsx";
// import { useAppContext } from "./context/AppContext.jsx";

// const App = () => {
//   const { isAdmin } = useAppContext();

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/favorite" element={<Favorite />} />
//       <Route path="/seat-layout/:showId" element={<SeatLayout />} />

//       {/* Admin Routes */}
//       {isAdmin ? (
//         <>
//           <Route path="/admin/add-show" element={<AddShow />} />
//           <Route path="/admin/list-shows" element={<ListShows />} />
//           <Route path="/admin/list-booking" element={<ListBooking />} />
//         </>
//       ) : (
//         <>
//           <Route path="/admin/*" element={<Navigate to="/" />} />
//         </>
//       )}

//       {/* Fallback */}
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default App;
