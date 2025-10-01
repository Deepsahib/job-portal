import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const {user}=useSelector((state)=>state.user);
    
  const loggedIn = user;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">JobHunt</Link>
      </div>

      {/* Links + Buttons */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </Link>
        <Link to="/jobs" className="text-gray-700 hover:text-blue-600 font-medium">
          Browse
        </Link>
        <Link to="/jobs" className="text-gray-700 hover:text-blue-600 font-medium">
          Jobs
        </Link>

        {!loggedIn ? (
          <div className="flex items-center space-x-3">
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition"
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="relative">
            {/* Avatar */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold focus:outline-none"
            >
              <img src={user.profile.profilePhoto} alt="" />
            </button>

            {/* Popover Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button
                  onClick={() => alert("Logout clicked")}
                  className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
