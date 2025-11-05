import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 mt-6 pb-6 px-6 md:px-10">
      {/* Container */}
      <div className=" container mx-auto grid sm:grid-cols-1 md:grid-cols-4 gap-4">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-3">MyLogo</h2>
          <p className="text-gray-600 font-normal text-base">
            Building user-friendly web experiences with modern design and
            smooth performance. Designed with love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/help-center" className="hover:text-blue-500">Help Center</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-blue-500">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-blue-500">Terms of Service</Link></li>
            <li><Link to="/faqs" className="hover:text-blue-500">FAQs</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-blue-600">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-sky-500">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-pink-500">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-400">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} MyLogo. All rights reserved.
      </div>
    </footer>
  );
}
