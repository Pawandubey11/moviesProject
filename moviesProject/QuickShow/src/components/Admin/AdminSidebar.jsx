import React from "react";
import { assets } from "../../assets/assets";

const AdminSidebar = () => {
  const User = {
    firstName: "Admin",
    lastName: "User",
    imageurl: assets.profile,
  };

  const adminNavlinks = [
    { name: "Dashboard", href: "/admin", icon: assets.dashboard },
    { name: "Add Show", href: "/admin/add-show", icon: assets.addShow },
    { name: "List Shows", href: "/admin/list-shows", icon: assets.listShow },
    {
      name: "List Bookings",
      href: "/admin/list-bookings",
      icon: assets.listBooking,
    },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <div className="p-4 border-b border-gray-700 flex items-center">
        <img
          src={User.imageurl}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="text-lg font-semibold">
            {User.firstName} {User.lastName}
          </h3>
        </div>
      </div>
      <div className="p-4">
        <ul>
          {adminNavlinks.map((link) => (
            <li
              key={link.name}
              className="flex items-center gap-2 p-2 hover:bg-gray-700"
            >
              <img src={link.icon} alt={link.name} className="w-6 h-6" />
              <a href={link.href} className="text-sm">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
