import { useState } from "react";
import "../App.css";
import logo from "../assets/ph_framer-logo.svg";
import logo1 from "../assets/cart.png";
import logo2 from "../assets/Vector.svg";
import useStore from "./Store";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [hambergAnimation, setHambergAnimation] = useState(false);

  const { Cart } = useStore((state) => ({
    Cart: state.Cart,
  }));

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setHambergAnimation(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="w-full h-auto px-[1rem] md:px-[8rem] py-[1rem]">
        <div className="max-w-full h-auto grid grid-cols-2 container">
          <div className="w-full h-auto col-span-1 flex items-center justify-start">
            <div className="flex items-center justify-center gap-[0.5rem]">
              <img className="w-[1.3rem]" src={logo} alt="Ecommerce Logo" />
              <div
                className="ecommerce"
                style={{ fontFamily: "Mono Sans, sans-serif" }}
              >
                Ecommerce App
              </div>
            </div>
          </div>
          <div className="w-full h-auto col-span-1 flex items-center justify-end">
            <div className="flex items-center justify-center gap-[1rem]">
              <div className="bg-black  duration-1000 text-white px-[0.7rem] py-[0.2rem] rounded-full cursor-pointer hidden md:block text-[1.1rem]">
                Contact us
              </div>
              <div className="hidden md:block">
                <div className="text-[1.1rem] flex items-center justify-center bg-black text-white px-[0.7rem] py-[0.2rem] rounded-full gap-[0.3rem] cursor-pointer duration-1000">
                  <img src={logo1} alt="Bi Cart" />
                  <div>({Cart.length})</div>
                </div>
              </div>
              <div
                className={`bg-[#DDDDDD] px-[0.5rem] py-[0.5rem] rounded-full cursor-pointer hamberg  ${
                  hambergAnimation ? "hamberg-open" : ""
                }`}
                onClick={toggleMenu}
              >
                <img className="w-[1.07rem]" src={logo2} alt="Vector" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 hamberg1">
          <div className="text-white p-8">
            <div className="w-full h-auto grid grid-cols-2 mt-12 gap-4">
              <div className="w-full h-auto col-span-1 border-black px-8 py-5 md:py-[2rem] hover:cursor-pointer hover:bg-black hover: text-white duration-1000 shadow-2xl hover:text-white">
                <p className="text-white md:text-[4rem]">Our Work</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
