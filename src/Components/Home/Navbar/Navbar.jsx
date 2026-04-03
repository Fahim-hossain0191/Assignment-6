import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ count }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-full fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-40">
      

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

       
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        <h1 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-2xl sm:text-3xl lg:text-5xl bg-clip-text text-transparent font-bold">
          DigiTools
        </h1>
      </div>

    
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-lg lg:text-xl gap-2">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>


      <div className="navbar-end flex items-center gap-3">
      
        <div className="relative">
          <FaShoppingCart className="text-xl sm:text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
            {count.length}
          </span>
        </div>

      
        <a className="font-medium text-sm sm:text-lg">Login</a>

        <button className="hidden sm:inline-flex btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;