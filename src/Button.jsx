import React from 'react';

export default function Button({ label, variant = "primary", onClick, className}) {
  const baseStyle =
    "px-4 py-2 rounded-xl font-bold transform active:scale-95 focus:outline-none transition-all duration-300";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    tertiary: "bg-green-500 text-white hover:bg-green-600",
  };

  
   // 👇 Combine all styles safely
  const buttonStyle = `${baseStyle} ${variants[variant]} ${className || ""}`;

  return (
    <button type="button" onClick={onClick} className={buttonStyle} >
      {label}
    </button>
  );
}
