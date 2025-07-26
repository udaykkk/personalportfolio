import React from "react";
import Header from "../../components/Header";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

function HireMe() {
  return (
    <div className="bg-[#141414] w-full min-h-screen">
      <Header />
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <img
          className="w-48 rounded-full"
          src="https://ibb.co/84TyBN1H"
          alt="Profile Photo"
        />
        <img
          src="https://ibb.co/S4NyMkGL"
          alt="Logo"
          className="h-10 w-auto"
        />
        <p className="text-white font-[Bebas_Neue] text-3xl">
          Full Stack Developer | Bridging Design & Logic
        </p>
        <p className="text-white font-[Bebas_Neue] font-[100] text-lg">
          {" "}
          Let's Build something amazing together!
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/uday-krishna-66606822a"
            target="_blank"
          >
            <button className="flex bg-blue-800 p-2 rounded-xl items-center gap-2 hover:bg-blue-700 transition-colors cursor-pointer">
              <FaLinkedinIn className="text-white" />
              <p className="text-white font-bold">LinkedIn</p>
            </button>
          </a>
          <a href="mailto:udaykrishna212003@gmail.com">
            <button className="flex bg-zinc-800 p-2 rounded-xl items-center gap-2 hover:bg-zinc-700 transition-colors cursor-pointer">
              <MdOutlineMail className="text-white" />
              <p className="text-white font-bold">udaykrishna212003@gmail.com</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HireMe;
