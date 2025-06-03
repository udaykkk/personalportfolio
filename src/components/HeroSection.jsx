import React from "react";

function HeroSection({ video, className, content, title }) {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${video})`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-8 ">
        <div className="text-white text-3xl font-bold">
          {title}
        </div>
        <div className="text-white text-xl font-bold ">{content}</div>
        <div className="flex flex-row gap-5">
          <div>
            <button
              className="flex items-center gap-2 text-black font-bold bg-white pt-3 pb-3 pr-8 pl-8 rounded-xl m-0 cursor-pointer"
              style={{
                background: "rgba(255,255,255, 0.8)",
              }}
            >
              ▶ <span className="text-xl">RESUME</span>
            </button>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/anurag-banerjee007/" target="_blank">
            <button
              className=" flex items-center gap-2 text-black font-bold pt-3 pb-3 pr-8 pl-8 rounded-xl m-0 cursor-pointer"
              style={{
                background: "rgba(63,63,70, 0.6)",
              }}
            >
              <span className="text-white text-xl">ⓘ</span>
              <span className="text-white text-xl">Linkedin</span>
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
