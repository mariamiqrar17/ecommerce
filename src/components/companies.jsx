import React from "react";
import company1 from "../assets/company1.svg";
import company2 from "../assets/company2.svg";
import company3 from "../assets/company3.svg";
import company4 from "../assets/company4.svg";
import company5 from "../assets/company5.svg";
import company6 from "../assets/company6.svg";
import company7 from "../assets/company7.svg";
import company8 from "../assets/company8.svg";

export default function Company() {
  return (
    <div className="w-full h-auto px-[0.3rem]">
      <div className="max-w-full h-auto bg-black grid grid-cols-1 container rounded-lg py-8 md:py-16 md:px-[8rem] px-[0.2rem]">
        <div className="md:block hidden">
          <div className="w-full h-auto col-span-1 flex items-center justify-start px-[0.5rem] mb-10">
            <div className="flex items-center gap-5">
              <div className="text-white">
                We’ve worked with hundreds of amazing people
              </div>
              <hr className="text-white w-[687px]" />
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <div className="w-full h-auto col-span-1 flex items-center justify-center gap-6 px-[0.5rem] mb-5">
            <hr className="text-white w-[5rem]" />
            <div className="text-white text-center">
              We’ve worked with hundreds of amazing people
            </div>
            <hr className="text-white w-[5rem]" />
          </div>
        </div>
        <div className="w-full h-auto col-span-1 px-[0.5rem]">
          <div className="w-full h-auto flex items-center justify-between flex-wrap mb-5">
           <img className="w-[10rem]" src={company5} alt="company5" />
           <img className="w-[10rem]" src={company8} alt="company8" />
           <img className="w-[10rem]" src={company6} alt="company6" />
            
            <img className="w-[10rem]" src={company2} alt="company2" />
            
            
          </div>
          <div className="w-full h-auto flex items-center justify-between flex-wrap">
          <img className="w-[10rem]" src={company4} alt="company4" />
          <img className="w-[10rem]" src={company3} alt="company3" />
            <img className="w-[10rem]" src={company7} alt="company7" />
            <img className="w-[10rem]" src={company1} alt="company1" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
