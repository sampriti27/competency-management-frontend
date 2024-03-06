import React from "react";

const TabButton = ({ children, onClick, isActive }) => {
  return (
    <button
      className={`text-white rounded px-4 py-2 m-1 transition duration-300 ${
        isActive ? "bg-sky-950" : "bg-sky-700 hover:bg-sky-900"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TabButton;
