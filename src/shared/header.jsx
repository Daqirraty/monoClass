import { useState } from "react";
import Logo from "../assets/Logo.svg";
import arrowDown from "../assets/arrowDown.svg";
// import AccessBank from "../assets/AccessBank.png";
import hamburgerClose from "../assets/hamburgerClose.png";
import hamburger from "../assets/hamburger.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-4 flex font-DM-Sans items-center justify-between w-full px-[5rem] py-2 md:px-[2rem] sm:py-[1rem] sm:px-[1rem] bg-white lg:fixed lg:top-0 flex-wrap">
      <div className="flex justify-between sm:w-full md:w-full border">
        <img className="lg:w-[5rem] sm:w-[5rem]" src={Logo} alt="logo" />

        <button onClick={() => setIsOpen(!isOpen)} className="outline-none ">
          {isOpen ? (
            <img
              src={hamburgerClose}
              alt="hamburgerClose"
              className="lg:hidden block w-[2.5rem] h-[2.5rem] sm:w-[25px] sm:h-[16.67px]"
            />
          ) : (
            <img
              src={hamburger}
              alt="hamburger"
              className="lg:hidden block w-[2.5rem] h-[2.5rem] sm:w-[25px] sm:h-[16.67px]"
            />
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block " : "hidden"
        } w-full lg:flex lg:justify-between lg:items-center lg:w-auto lg:relative`}
      >
        <ul className="flex w-[55rem] justify-between items-center md:w-full sm:absolute sm:-left-[.01rem] sm:h-full border border-red-700 sm:z-10 sm:bg-white md:flex-col sm:flex-col sm:w-full sm:mt-[2rem]">
          <div className="flex w-[8rem] p-2 border-slate-400 sm:w-full sm:border-b-2">
            <li className="text-[15px] sm:w-full">Why Mono</li>
            <img src={arrowDown} alt="" className="w-[20px] sm:hidden" />
          </div>
          <div className="flex w-[8rem] p-2 border-slate-400 sm:w-full sm:border-b-2">
            <li className="text-[15px] sm:w-full">Products</li>
            <img src={arrowDown} alt="" className="w-[20px] sm:hidden" />
          </div>
          <div className="flex w-[8rem] p-2 border-slate-400 sm:w-full sm:border-b-2">
            <li className="text-[15px] sm:w-full">Learn</li>
            <img src={arrowDown} alt="" className="w-[20px] sm:hidden" />
          </div>
          
          <div className="flex w-[8rem] p-2 border-slate-400 sm:w-full sm:border-b-2">
            <li className="text-[15px] sm:w-full  ">Developers</li>
            <img src={arrowDown} alt="" className="w-[20px] sm:hidden" />
          </div>

          <div className="flex justify-between w-[25rem] sm:items-center sm:my-5 sm:w-full ">
            <button
              className="flex justify-center items-center bg-white border-2 text-[#114c8d] border-[#114c8d] p-5 w-[184px] h-[42px] rounded-lg text-center
             hover:bg-[#114c8d] hover:text-white sm:w-full "
            >
              Sign in
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
