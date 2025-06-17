import React from "react";
import { Link } from "react-router";
import Developer from "../Developer/Developer";
import Recruiter from "../Recruiter/Recruiter";
import Stalker from "../Friends/Friend";
import Adventurer from "../Adventurer/Adventurer";

function Landing() {
  return (
    <div className="bg-zinc-900 h-screen w-screen flex justify-center items-center flex-col">
      <div className="text-white text-5xl mb-10">Pick Your Perspective</div>
      <div className="text-white flex gap-12">
        <div className="flex flex-col items-center">
          <Link to="/Developer" className="flex flex-col items-center">
            <img
              src="src/assets/Developer.png"
              alt="Developer"
              className="mb-2"
            />
            <div className="text-white text-2xl">Developer</div>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/Recruiter" className="flex flex-col items-center">
            <img
              src="src/assets/Recruiter.png"
              alt="Recruiter"
              className="mb-2"
            />
            <div className="text-white text-2xl">Recruiter</div>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/Stalker" className="flex flex-col items-center">
            <img src="src/assets/Stalker.png" alt="Stalker" className="mb-2" />
            <div className="text-white text-2xl">Friend</div>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/Adventurer" className="flex flex-col items-center">
            <img
              src="src/assets/Adventurer.png"
              alt="Adventurer"
              className="mb-2"
            />
            <div className="text-white text-2xl">Adventurer</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
