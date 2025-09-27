import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const AdminNavbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white px-6 py-4 shadow-md">
      {/* Logo & Title */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src={assets.adminLogo}
          alt="Admin Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-xl font-bold">Admin Dashboard</span>
      </Link>

      {/* Optional right-side menu */}
      <div className="flex items-center gap-4">
        <span className="hidden md:block">Welcome, Admin</span>
        {/* Add logout/profile button here if needed */}
      </div>
    </nav>
  );
};

export default AdminNavbar;
