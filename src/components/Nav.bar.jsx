// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Compass, User } from "lucide-react";

const navItems = [
  { to: "/feed", icon: <Home size={20} />, label: "Home" },
  { to: "/missions", icon: <Compass size={20} />, label: "Missions" },
  { to: "/profile", icon: <User size={20} />, label: "Profile" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-sm z-50">
      <div className="flex justify-around items-center h-14">
        {navItems.map(({ to, icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center text-xs ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-500"
              } hover:text-blue-500 transition duration-150`}
            >
              {icon}
              <span className="mt-1">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
