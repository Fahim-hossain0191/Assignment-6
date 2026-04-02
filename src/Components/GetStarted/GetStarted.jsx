import React from "react";
import Img1 from "../../assets/user.png";
import Img2 from "../../assets/package.png";
import Img3 from "../../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="w-10/12 mx-auto my-20">
      <h1 className="text-center text-5xl font-medium">
        Get Started in 3 Steps
      </h1>
      <p className="text-center font-light mt-2">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

        {/* Step 1 */}
        <div className="shadow-lg p-6 rounded-lg flex flex-col items-center text-center relative">
          <div className="absolute top-3 right-3 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center justify-center shadow-md font-semibold">
            01
          </div>

          <img src={Img1} alt="" className="w-24 h-24 mb-4" />
          <h2 className="text-2xl font-medium">Create Account</h2>
          <p className="text-sm mt-2">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Step 2 */}
        <div className="shadow-lg p-6 rounded-lg flex flex-col items-center text-center relative">
          <div className="absolute top-3 right-3 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center justify-center shadow-md font-semibold">
            02
          </div>

          <img src={Img2} alt="" className="w-24 h-24 mb-4" />
          <h2 className="text-2xl font-medium">Choose Products</h2>
          <p className="text-sm mt-2">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Step 3 */}
        <div className="shadow-lg p-6 rounded-lg flex flex-col items-center text-center relative">
          <div className="absolute top-3 right-3 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center justify-center shadow-md font-semibold">
            03
          </div>

          <img src={Img3} alt="" className="w-24 h-24 mb-4" />
          <h2 className="text-2xl font-medium">Start Creating</h2>
          <p className="text-sm mt-2">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default GetStarted;