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
      {" "}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col gap-3 sm:gap-4 ">
        <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {title}
        </div>
        <div className="text-white text-sm sm:text-base font-bold max-w-full sm:max-w-3/4 ">
          {content}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <div>
            <a
              href="https://drive.google.com/file/d/1kjwvI7K_oD2Xe0Ndd4DLR9XXL-dXfwcg/view?usp=drivesdk"
              target="_blank"
            >
              <button
                className="flex items-center gap-2 text-black font-bold bg-white pt-2 sm:pt-3 pb-2 sm:pb-3 pr-4 sm:pr-5 pl-4 sm:pl-5 rounded-sm m-0 cursor-pointer text-sm sm:text-base"
                style={{
                  background: "rgba(255,255,255, 0.8)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  role="img"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6"
                  aria-hidden="true"
                >
                  <path
                    d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                    fill="black"
                  ></path>
                </svg>{" "}
                <span className="text-sm sm:text-base">RESUME</span>
              </button>
            </a>
          </div>{" "}
          <div>
            <a
              href="https://www.linkedin.com/in/uday-krishna-66606822a"
              target="_blank"
            >
              <button
                className=" flex items-center gap-2 text-black font-bold pt-2 sm:pt-3 pb-2 sm:pb-3 pr-4 sm:pr-5 pl-4 sm:pl-5 rounded-sm m-0 cursor-pointer text-sm sm:text-base"
                style={{
                  background: "rgba(63,63,70, 0.6)",
                }}
              >
                <span className="text-white text-lg sm:text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="sm:w-6 sm:h-6"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <span className="text-white text-sm sm:text-base">
                  Linkedin
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
