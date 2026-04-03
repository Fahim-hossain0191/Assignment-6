import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white pb-10">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-10">
   
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-4xl font-semibold">DigiTools</h2>
          <p>
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

     
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover block">Branding</a>
          <a className="link link-hover block">Design</a>
          <a className="link link-hover block">Marketing</a>
          <a className="link link-hover block">Advertisement</a>
        </nav>

      
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover block">About us</a>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Jobs</a>
          <a className="link link-hover block">Press kit</a>
        </nav>

  
        <div>
          <h6 className="footer-title">Social Links</h6>
          <div className="flex gap-4 text-xl">
            <IoLogoInstagram className="cursor-pointer hover:text-[#E1306C]" />
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaXTwitter className="cursor-pointer hover:text-white" />
          </div>
        </div>

      </div>

     
      <hr className="border-gray-600 mx-auto w-10/12" />

    
      <div className="flex justify-between mx-auto w-10/12 items-center">
             <p className="text-center py-6 text-sm font-light">
       © 2026 Digitools. All rights reserved.
      </p>

      <div className="gap-5 flex">
        <p className="font-light">Privacy Policy  </p>
        <p className="font-light">Terms of Service</p>
        <p className="font-light">Cookies</p>
      </div>
      </div>
      

    </footer>
  );
};

export default Footer;