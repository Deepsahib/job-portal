import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">JobPortal</h2>
          <p className="text-gray-300 text-sm">
            Your gateway to the best career opportunities. Discover, apply, and
            grow with top companies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Browse Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Companies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to get the latest job updates and career tips.
          </p>
          <form className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-800 w-full sm:w-auto flex-grow focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded-lg transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6">
        <p className="text-gray-300 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} JobPortal. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
