import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu as MenuIcon,
  X as XIcon,
  Search as SearchIcon,
} from "lucide-react";
import { assets } from "../assets/assets";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate(); // ✅ correct hook usage

  const handleLogin = () => {
    openSignIn();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="flex items-center justify-between px-6 md:px-14 lg:px-20 h-16">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img
              className="w-32 h-12 object-contain hover:scale-105 transition-transform"
              src={assets.logo}
              alt="logo"
            />
          </Link>

          <div className="hidden md:flex space-x-6 text-lg font-medium">
            <Link className="hover:text-red-500" to="/">
              Home
            </Link>
            <Link className="hover:text-red-500" to="/movies">
              Movies
            </Link>
            <Link className="hover:text-red-500" to="/my-bookings">
              My Bookings
            </Link>
            <Link className="hover:text-red-500" to="/release">
              Release
            </Link>
            <Link className="hover:text-red-500" to="/favorite">
              Favorite
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <SearchIcon className="w-6 h-6 hidden md:inline cursor-pointer hover:text-red-500" />

            {!user ? (
              <button
                onClick={handleLogin}
                className="hidden md:inline bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
              >
                Login
              </button>
            ) : (
              <>
                {/* Optional extra button */}
                <button
                  onClick={() => navigate("/my-bookings")}
                  className="hidden md:inline px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700"
                >
                  My Bookings
                </button>
                <UserButton afterSignOutUrl="/" />
              </>
            )}

            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <XIcon className="w-8 h-8" />
              ) : (
                <MenuIcon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu … (unchanged) */}
      {/* ... */}
    </nav>
  );
};

export default Navbar;
