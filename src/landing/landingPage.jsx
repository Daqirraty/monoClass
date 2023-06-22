// import Logo from "../assets/Logo.svg";
// import arrowDown from "../assets/arrowDown.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import moving from "../assets/moving.jpg";
import carbonlogo from "../assets/carbonlogo.svg";
import autochek from "../assets/autochek.svg";
import flutter from "../assets/flutter.svg";
import evolve_credit from "../assets/evolve_credit.svg";
import vector from "../assets/vector.svg";
import Header from '../shared/header'

import { BsArrowRightShort } from "react-icons/bs";

const landingPage = () => {
  return (
    <div className="font-DM-Sans">
      <Header/>

      <div className="flex pl-[7rem] py-[7rem] sm:pl-0 sm:py-[5rem]">
        <div className="w-[50%] border-2 sm:w-full sm:px-[1rem]">
          <div className="flex items-center justify-around bg-[#f5f5f5] rounded-full w-[16rem] p-1">
            <span className="bg-[#0055ba] rounded-2xl w-[3.5rem] p-1 text-center text-white text-[11px]">
              NEW
            </span>
            <p className="text-[13px]">Mono dashboard 3.0 is live !</p>
            <img src={arrowLeft} alt="" className="w-[20px]" />
          </div>

          <h1 className="text-[92px] font-medium sm:text-[3rem] sm:mt-[2rem] ">
            Reliably access bank accounts
          </h1>
          <p className="text-[26px] w-[35rem] py-[2rem] sm:py-[1rem] sm:text-sm sm:w-[20rem]">
            Mono helps businesses to access high-quality financial data and
            direct bank payments.
          </p>
          <div className="flex gap-5 py-[3rem] ">
            <button className="flex items-center gap-2 bg-[#0055ba] w-[13rem] p-2 text-white  
              rounded-xl text-[15px] sm:w-[11rem] sm:text-xs">
              Get started for Free
              <span className="">
                <BsArrowRightShort className="w-[2rem] text-white" />
              </span>
            </button>
            <button className="flex gap-2 items-center bg-[#d8dee6] w-[10rem] p-[.6rem] rounded-lg
             text-black sm:w-[11rem] sm:text-xs">
              Contact Sales
              <span className="">
                <BsArrowRightShort className="w-[2rem]" />
              </span>
            </button>
          </div>
        </div>
        {/* <div className="w-[40%]"> */}
        <img src={moving} alt="" className="w-[50%] sm:hidden" />
        {/* </div> */}
      </div>

      <div className="border-2 px-[7rem] sm:px-[1rem]">
        <p className="">Trusted By</p>
        <div className="grid grid-cols-4 justify-between gap-5 py-[2rem]  sm:grid sm:grid-flow-col sm:grid-rows-2 
                        md:grid md:grid-cols-3 md:grid-flow-row  ">

          {/* <div className="flex w-[50%] justify-around border border-red-700"> */}
            <div className="sm:w1/2">
              <img src={carbonlogo} alt="" className="" />
            </div>
            <div className="sm:w-1/2">
              <img src={autochek} alt="" className="" />
            </div>
          {/* </div> */}

          {/* <div className="flex w-[50%] justify-around"> */}
            <div className="">
              <img src={flutter} alt="" className="" />
            </div>
            <div className="">
              <img src={evolve_credit} alt="" className="" />
            </div>
          {/* </div> */}

        </div>
      </div>

      <div className="px-[7rem] py-[4rem] sm:px-[1rem]">
        <p className="text-[4rem] w-[40rem] font-bold sm:text-[1.6rem] sm:w-full">
          Build for the future of digital finance.
        </p>
        <p className="text-[26px] w-[30rem] py-[2rem] font-normal sm:w-full sm:text-sm sm:py-[1rem]">
          Bring tomorrows solutions to life, with our customer-focused
          solutions, today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-1 justify-evenly px-[7rem] sm:px-0 sm:w-full">
        <div className="bg-hero bg-cover bg-no-repeat text-white p-[4rem] border-4 rounded-2xl sm:p-[1rem] sm:w-full">
          <img src={vector} alt="" className="" />
          <p className="text-[45px] font-bold w-[10rem] py-[2rem] sm:text-lg">Connect</p>
          <p className="w-[20rem] text-[18px] sm:text-sm ">
            Securely access financial accounts for statements, transactions, and
            identity
          </p>
          <button className="flex items-center gap-2 text-[#0055ba] bg-white w-[13rem] p-3 my-[3rem] 
            rounded-xl text-[15px] sm-w-[7rem]">
            start with connect
            <span className="">
              <BsArrowRightShort className="w-[2rem]" />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5 h-[100vh] sm:h-0 sm:grid sm:grid-cols-1 ">
          <div className="bg-heroTwo bg-cover bg-no-repeat rounded-2xl sm:px-[1rem] ">
            <div className="w-[30rem] mx-auto pt-[4rem]">
              <img src={vector} alt="" className="" />
              <p className="text-[45px] font-bold w-[10rem] py-[2rem]">
                Connect
              </p>
              <p className="w-[20rem] text-[18px]">
                Securely access financial accounts for statements, transactions,
                and identity
              </p>
              <button className="flex items-center gap-2 text-[#0055ba] bg-white w-[13rem] p-3 my-[3rem] rounded-xl text-[15px]">
                start with connect
                <span className="">
                  <BsArrowRightShort className="w-[2rem]" />
                </span>
              </button>
            </div>
          </div>

          <div className="bg-heroThr bg-cover bg-no-repeat rounded-2xl text-white sm:px-[1rem] ">
            <div className="w-[30rem] mx-auto pt-[4rem]">
              <img src={vector} alt="" className="" />
              <p className="text-[45px] font-bold w-[10rem] py-[2rem]">
                Connect
              </p>
              <p className="w-[20rem] text-[18px]">
                Securely access financial accounts for statements, transactions,
                and identity
              </p>
              <button className="flex items-center gap-2 text-[#0055ba] bg-white w-[13rem] p-3 my-[3rem] rounded-xl text-[15px]">
                start with connect
                <span className="">
                  <BsArrowRightShort className="w-[2rem]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingPage;
