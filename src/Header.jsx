import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button"; // ✅ Import your reusable Button

export default function Header() {
  // Example function for button click
  const handleSignUp = () => {
    console.log("Sign Up clicked!");
  };

  return (
    <header className="bg-white py-6 shadow-md px-10 relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-2xl text-blue-500">MyLogo</h1>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-gray-900 hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          </li>
        </ul>

        {/* ✅ Reusable Button */}
        <Link to="/signup" className="hidden md:block">
          <Button label="Sign Up" variant="primary" onClick={handleSignUp} />
        </Link>

        {/* Mobile Menu Icon */}
        <span className="md:hidden text-2xl text-gray-700 cursor-pointer">
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
    </header>
  );
}
