import React from "react";
import "../App.css";

import Frame from "../assets/Frame.svg";
import Frame1 from "../assets/Second.svg";
import Frame2 from "../assets/Third.svg";

export default function Technology() {
  return (
    <>
      <div className="w-full h-auto px-[1rem] md:px-[8rem] pt-[5rem] pb-[4rem]">
        <div className="max-w-[45rem] h-auto grid grid-cols-1 container">
          <div className="w-full h-auto col-span-1">
            <div className="text-2xl sm:text-3xl md:text-5xl font-[700] duration-200">
             Harnessing technology
            </div>
          </div>
          <div className="w-full h-auto col-span-1">
            <div className="text-2xl sm:text-3xl md:text-5xl font-[700] duration-200">
            for a brighter future
            </div>
          </div>
          <div className="w-full h-auto col-span-1 py-5">
            <div className="duration-200 font-[500] text-black text-[0.9rem] md:text-[1.1rem]">
            We believe technology is the answer to the world’s greatest challenges. It’s also the 
            cause, so we find ourselves in bit of a catch 22 situation.
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Content 1 */}
        <div className="mb-5">
          <div className="w-full h-96 mx-auto overflow-hidden rounded-xl shadow-2xl shadow-gray-200 border-2 border-gray-200 flex flex-col items-start justify-start">
            <img src={Frame} alt="" className=" w-[3rem] block h-18 w-18 mb-3 mt-2 ml-4 lg:mt-4 lg:h-22 lg:w-22" />

            <div className="flex flex-col items-start justify-start px-4">
              <div className="text-xl sm:text-sm md:text-md lg:font-[900] md:font-[700] font-[500] duration-200 ml-4 mt-2">
                2023 / Case study
              </div>
            </div>

            <div className="flex flex-col items-start justify-start px-4">
              <div className="text-2xl sm:text-sm md:text-md font-[700] lg:font-[900] md:font-[900] duration-200 ml-3 mt-2 md:mt-6 lg:mt-12">
                Skip the bank, borrow
              </div>
              <div className="text-2xl sm:text-sm md:text-md font-[700] lg:font-[900] md:font-[900] duration-200 ml-3 ">
                from those you trust
              </div>
            </div>

            <div className="flex flex-col items-start justify-start px-4">
              <div className="text-xl sm:text-sm md:text-md font-[500] duration-200 ml-3 mt-4 md:mt-8 lg:mt-14">
                FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.
              </div>
            </div>
          </div>
        </div>

        {/* Content 2 */}
        <div className="mb-5">
          <div className="w-full h-96 mx-auto overflow-hidden rounded-xl shadow-2xl shadow-gray-200 border-2 border-gray-200 flex flex-col items-start justify-start">
            <img src={Frame1} alt="" className="block h-18 w-18 mb-3 mt-2 ml-4 lg:mt-4 lg:h-22 lg:w-22" />

            <div className="flex flex-col items-start justify-start px-4">
              <div className="text-xl sm:text-sm md:text-md font-[500] lg:font-[900] md:font-[700] duration-200 ml-4 mt-2">
                2023 / Case study
              </div>
            </div>

            <div className="flex flex-col items-start justify-start px-4">
              <div className="text-2xl sm:text-sm md:text-md font-[700] duration-200 ml-3 mt-3 lg:font-[900] md:font-[900] md:mt-6 lg:mt-12">
                  Get a hodl of your health
              </div>
            </div>

            <div className="flex flex-col items-start justify-start px-4">
              <div className="text-xl sm:text-sm md:text-md font-[500] duration-200 ml-3 mt-4 md:mt-8 lg:mt-14">
                FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.
              </div>
            </div>
          </div>
        </div>

        {/* Content 3 */}
        <div className="mb-5">
          <div className="w-full h-96 mx-auto overflow-hidden rounded-xl shadow-2xl shadow-gray-200 border-2 border-gray-200 flex flex-col items-start justify-start">
            <img src={Frame2} alt="" className="block h-18 w-18 mb-3 mt-2 ml-4 lg:mt-4 lg:h-22 lg:w-22" />

            <div className="flex flex-col items-start justify-start px-4">
              <div className="text-xl sm:text-sm md:text-md font-[500] lg:font-[900] md:font-[700] duration-200 ml-4 mt-2">
                2023 / Case study
              </div>
            </div>

            <div className="flex flex-col items-start justify-start px-4">
              <div className="text-2xl sm:text-sm md:text-md font-[700] duration-200 ml-3 mt-2 lg:font-[900] md:font-[900] md:mt-6 lg:mt-12">
                 Overcome your fears, 
              </div>
              <div className="text-2xl sm:text-sm md:text-md font-[700] duration-200 ml-3 lg:font-[900] md:font-[900]">
                 find your match
              </div>
            </div>

            <div className="flex flex-col items-start justify-start px-4">
              <div className="text-xl sm:text-sm md:text-md font-[500] duration-200 ml-3 mt-4 md:mt-8 lg:mt-14">
                FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
