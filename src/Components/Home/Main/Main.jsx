import React from "react";
import Img from "../../../assets/banner.png";
import Img1 from "../../../assets/Play.png"

import { CgMediaLive } from "react-icons/cg";
const Main = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-10/12 mx-auto mt-30 ">
        <div className="space-y-3">
          <span className="inline-flex rounded-full bg-purple-200 px-3 py-1  items-center gap-2">
            <CgMediaLive />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-xl bg-clip-text text-transparent font-semibold w-auto">
              New: AI-Powered Tools Available
            </span>
          </span>
          <h1 className="text-7xl font-medium">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-2xl font-light">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-3">
            <button className="btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
              Explore Products
            </button>
            <button className="btn btn-primary btn-outline rounded-full"><img src={Img1} alt=""  />Watch Demo</button>
          </div>
        </div>
        <div className=" px-10">
          <img src={Img} alt="No picture added" />
        </div>
      </div>
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-15 p-20">
             <div className="flex w-9/12  mx-auto justify-between ">
                <div className="text-white font-bold text-3xl">
                         <h1>50K+</h1>
                         <p>Active Users</p>
                       
                </div>
                 <div className="w-px h-20 bg-white"></div>
                <div className="text-white font-bold text-3xl">
                           <h1>200+</h1>
                         <p>Premium Tools</p>
                </div>
                <div className="w-px h-20 bg-white"></div>
                <div className="text-white  font-bold text-3xl">
                      <h1>4.9</h1>
                         <p>Rating</p>
                </div>
           
             </div>
      </div>
    </>
  );
};

export default Main;
