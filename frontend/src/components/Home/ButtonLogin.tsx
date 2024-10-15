import React from "react";
import { Link } from "react-router-dom";

const ButtonLogin = ({ text}: { text: string}) => {
  return (
    <Link 
      to="/login" 
      className="flex items-center justify-center px-6 py-3 border-2 border-blue-500 text-blue-500 bg-white rounded-full transition-colors duration-300 hover:bg-blue-500 hover:text-white"
    >
      <svg 
        aria-hidden="true" 
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 512 512"
      >
        <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path>
      </svg>
      <span className="blue">{text}</span>
    </Link>
  );
};

export default ButtonLogin;