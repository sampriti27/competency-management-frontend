import React from "react";

const TabButton = ({ children, onClick, isActive }) => {
  return (
    <button
      className={`text-white rounded px-4 py-2 m-1 transition duration-300 ${
        isActive ? "bg-indigo-950" : "bg-indigo-500 hover:bg-indigo-900"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TabButton;
