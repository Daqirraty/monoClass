import Logo from "../assets/Logo.svg";
import arrowDown from "../assets/arrowDown.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import moving from "../assets/moving.jpg";
import carbonlogo from "../assets/carbonlogo.svg";
import autochek from "../assets/autochek.svg";
import flutter from "../assets/flutter.svg";
import evolve_credit from "../assets/evolve_credit.svg";
import vector from "../assets/vector.svg";

import { BsArrowRightShort } from "react-icons/bs";

const landingPage = () => {
  return (
    <div className="font-DM-Sans">
      <nav className="flex justify-center px-[7rem] py-[2rem]">
        <div className="w-[100%] flex justify-between">
          <img src={Logo} alt="" className="w-[5rem]" />

          <ul className="flex border-2 items-center relative">
            <div className="flex w-[8rem] p-2 group ">
              <li className="">Why Mono</li>
              <img src={arrowDown} alt="" className="w-[20px]" />
              <div className=" hidden group-hover:block bg-red-700 w-[20rem] h-[50rem] absolute top-[4rem] -left-[5rem]">
                <div className="">1</div>
                <div className="">2</div>
                <div className="">3</div>
              </div>
            </div>

            <div className="flex w-[8rem] p-2">
              <li className="">Products</li>
              <img src={arrowDown} alt="" className="w-[20px]" />
            </div>

            <div className="flex w-[8rem] p-2">
              <li className="">Learn</li>
              <img src={arrowDown} alt="" className="w-[20px]" />
            </div>

            <div className="flex w-[8rem] ">
              <li className="">Developers</li>
              <img src={arrowDown} alt="" className="w-[20px]" />
            </div>
          </ul>

          <button className="p-4 bg-[#0055ba] text-white rounded-lg">
            Sign up
          </button>
        </div>
      </nav>

      <div className="flex px-[7rem] py-[7rem]">
        <div className="w-[60%]">
          <div className="flex items-center justify-between bg-[#f5f5f5] rounded-full w-[20rem] p-2">
            <span className="bg-[#0055ba] rounded-2xl w-[3.5rem] p-1 text-center">
              New
            </span>
            <p className="">Mono dashboard 3.0 is live !</p>
            <img src={arrowLeft} alt="" className="w-[2rem]" />
          </div>

          <h1 className="text-[6rem] font-black">
            Reliably access bank accounts
          </h1>
          <p className="text-[26px] w-[35rem] py-[2rem]">
            Mono helps businesses to access high-quality financial data and
            direct bank payments.
          </p>
          <div className="flex gap-5 py-[3rem] ">
            <button className="flex items-center gap-2 bg-[#0055ba] w-[13rem] p-3 text-white  rounded-xl text-[15px]">
              Get started for Free
              <span className="">
                <BsArrowRightShort className="w-[2rem] text-white" />
              </span>
            </button>
            <button className="flex gap-2 items-center bg-[#d8dee6] w-[10rem] p-3 rounded-lg text-black">
              Contact Sales
              <span className="">
                <BsArrowRightShort className="w-[2rem]" />
              </span>
            </button>
          </div>
        </div>
        {/* <div className="w-[40%]"> */}
        2
        <img src={moving} alt="" className="w-[40%]" />
        {/* </div> */}
      </div>

      <div className="border-4 px-[7rem] sm:">
        <p className="">Trusted By</p>
        <div className="flex justify-between gap-5 py-[2rem] sm:flex-col ">

          <div className="flex justify-around w-[50%]">
            <div className="">
              <img src={carbonlogo} alt="" className="" />
            </div>
            <div className="">
              <img src={autochek} alt="" className="" />
            </div>
          </div>

          <div className="flex justify-around w-[50%]">
            <div className="">
              <img src={flutter} alt="" className="" />
            </div>
            <div className="">
              <img src={evolve_credit} alt="" className="" />
            </div>
          </div>

        </div>
      </div>

      <div className="px-[7rem] py-[4rem]">
        <p className="text-[4rem] w-[40rem] font-bold">
          Build for the future of digital finance.
        </p>
        <p className="text-[26px] w-[30rem] py-[2rem] font-normal">
          Bring tomorrows solutions to life, with our customer-focused
          solutions, today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-1 justify-evenly border-4 px-[7rem]">
        <div className="bg-hero bg-cover bg-no-repeat text-white p-[4rem] rounded-2xl">
          <img src={vector} alt="" className="" />
          <p className="text-[45px] font-bold w-[10rem] py-[2rem]">Connect</p>
          <p className="w-[20rem] text-[18px]">
            Securely access financial accounts for statements, transactions, and
            identity
          </p>
          <button className="flex items-center gap-2 text-[#0055ba] bg-white w-[13rem] p-3 my-[3rem] rounded-xl text-[15px]">
            start with connect
            <span className="">
              <BsArrowRightShort className="w-[2rem]" />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5 h-[100vh]">
          <div className="bg-heroTwo bg-cover bg-no-repeat rounded-2xl ">
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

          <div className="bg-heroThr bg-cover bg-no-repeat rounded-2xl text-white">
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
