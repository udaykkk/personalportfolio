import React from "react";
import { Link } from "react-router";
import Developer from "../Developer/Developer";
import Recruiter from "../Recruiter/Recruiter";
import Stalker from "../Friends/Friend";
import Adventurer from "../Adventurer/Adventurer";

function Landing() {
  return (
    <div className="bg-zinc-900 h-screen w-screen flex justify-center items-center flex-col">
      <img
        src="https://i.ibb.co/7xR5vS5z/UDAY-KRISHNA-PORTFOLIO-7-27-2025.gif"
        alt="Portfolio Banner"
        className="w-64 md:w-96 rounded-lg mb-8 shadow-lg"
      />
      <div className="text-white text-5xl mb-16 text-center">
        Pick Your Perspective
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="flex flex-col items-center group">
          <Link to="/Developer" className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105">
              <img
                src="https://i.ibb.co/Q7tdv0Qc/image.png"
                alt="Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white text-xl md:text-2xl font-semibold group-hover:text-red-400 transition-colors duration-300">
              Developer
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center group">
          <Link to="/Recruiter" className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105">
              <img
                src="https://i.ibb.co/5gvCxQNQ/image.png"
                alt="Recruiter"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white text-xl md:text-2xl font-semibold group-hover:text-red-400 transition-colors duration-300">
              Recruiter
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center group">
          <Link to="/friend" className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105">
              <img
                src="https://i.ibb.co/C5KF6605/image.png"
                alt="friend"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white text-xl md:text-2xl font-semibold group-hover:text-red-400 transition-colors duration-300">
              Friend
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center group">
          <Link to="/Adventurer" className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105">
              <img
                src="https://i.ibb.co/R4T4j58x/image.png"
                alt="Adventurer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white text-xl md:text-2xl font-semibold group-hover:text-red-400 transition-colors duration-300">
              Adventurer
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
