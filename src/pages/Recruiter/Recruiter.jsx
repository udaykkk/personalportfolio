import React, { useRef } from "react";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/Header";

function Recruiter() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="bg-[#141414] w-screen min-h-screen">
        <Header avatar={"src/assets/Recruiter.png"}/>
        <div>
          <HeroSection
            className={"h-[75vh] items-center bg-center"}
            title={"Anurag Banerjee - Aspiring Developer"}
            video={
              "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif"
            }
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque orci id neque scelerisque commodo ac eu neque. Maecenas ut rutrum mauris. Duis feugiat leo sed euismod ullamcorper. Sed dictum, ante vel varius lacinia, eros arcu fermentum urna, vitae suscipit tellus lectus sit amet enim. Vivamus pharetra volutpat ante non auctor. Mauris at libero tincidunt, mollis ex sollicitudin, fringilla velit. Duis sed mi id ante vulputate ultrices id ac quam. Fusce iaculis eu ligula imperdiet tincidunt. Nulla consectetur bibendum mauris eget tristique."
            }
          />
        </div>
        <div className="h-screen overflow-hidden">
          <div className="text-white text-2xl font-bold ml-8 mt-6">Today's Top Picks for recruiter</div>
          <div className="relative group">
            <div 
              ref={scrollContainerRef}
              className="flex mt-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <img className="rounded-md w-64 ml-8 flex-shrink-0 transition-all duration-300 hover:shadow-[8px_8px_10px_rgba(239,68,68,0.8)]" src="https://placehold.co/600x400" alt="placeholder" />
              <img className="rounded-md w-64 ml-4 flex-shrink-0 transition-all duration-300 hover:shadow-[8px_8px_10px_rgba(239,68,68,0.8)]" src="https://placehold.co/600x400" alt="placeholder" />
              <img className="rounded-md w-64 ml-4 flex-shrink-0 transition-all duration-300 hover:shadow-[8px_8px_10px_rgba(239,68,68,0.8)]" src="https://placehold.co/600x400" alt="placeholder" />
              <img className="rounded-md w-64 ml-4 flex-shrink-0 transition-all duration-300 hover:shadow-[8px_8px_10px_rgba(239,68,68,0.8)]" src="https://placehold.co/600x400" alt="placeholder" />
              <img className="rounded-md w-64 ml-4 flex-shrink-0 transition-all duration-300 hover:shadow-[8px_8px_10px_rgba(239,68,68,0.8)]" src="https://placehold.co/600x400" alt="placeholder" />
              <img className="rounded-md w-64 ml-4 flex-shrink-0 transition-all duration-300 hover:shadow-[8px_8px_10px_rgba(239,68,68,0.8)]" src="https://placehold.co/600x400" alt="placeholder" />
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-2">
              <button 
                onClick={scrollLeft}
                style={{
                background: "rgba(63,63,70, 0.4)",
              }}
                className=" text-black px-1 py-18 rounded shadow-lg hover:bg-gray-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" role="img" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" transform="rotate(180)"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="black"></path></svg>
              </button>
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-2">
              
              <button 
                onClick={scrollRight}
                style={{
                background: "rgba(63,63,70, 0.4)",
              }}
                className=" text-black px-1 py-18 rounded shadow-lg hover:bg-gray-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" role="img" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="black"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recruiter;
