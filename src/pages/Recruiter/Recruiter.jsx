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
              className="flex mt-6 overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <img className="w-64 ml-8 flex-shrink-0" src="https://placehold.co/600x400" alt="placeholder" />
              <img className="w-64 ml-8 flex-shrink-0" src="https://placehold.co/600x400" alt="placeholder" />
              <img className="w-64 ml-8 flex-shrink-0" src="https://placehold.co/600x400" alt="placeholder" />
              <img className="w-64 ml-8 flex-shrink-0" src="https://placehold.co/600x400" alt="placeholder" />
              <img className="w-64 ml-8 flex-shrink-0" src="https://placehold.co/600x400" alt="placeholder" />
              <img className="w-64 ml-8 flex-shrink-0" src="https://placehold.co/600x400" alt="placeholder" />
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={scrollLeft}
                className="bg-white text-black px-3 py-2 rounded shadow-lg hover:bg-gray-200 transition-colors"
              >
                ←
              </button>
              <button 
                onClick={scrollRight}
                className="bg-white text-black px-3 py-2 rounded shadow-lg hover:bg-gray-200 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recruiter;
