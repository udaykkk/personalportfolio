import React, { useRef } from "react";
import { Link } from "react-router";

function CardRow({ title, images, CardName, links }) {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  return (
    <div className="mb-6 sm:mb-8">
      <div className="text-white text-xl sm:text-2xl font-bold ml-4 sm:ml-8 mt-4 sm:mt-6">
        {title}
      </div>
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          className="flex mt-4 sm:mt-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, index) => {
            const CardContent = (
              <div
                className={`relative ${
                  index === 0 ? "ml-4 sm:ml-8" : "ml-3 sm:ml-4"
                } flex-shrink-0 overflow-hidden rounded-md cursor-pointer w-48 h-28 sm:w-64 sm:h-36 md:w-72 md:h-40`}
              >
                <img
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-110 hover:shadow-[8px_8px_10px_rgba(239,68,68,0.8)]"
                  src={image}
                  alt="placeholder"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="text-white text-sm sm:text-lg md:text-xl font-bold text-center rounded px-2">
                    {CardName[index]}
                  </p>
                </div>
              </div>
            );

            return (
              <div key={index}>
                {links && links[index] ? (
                  links[index].startsWith("http") ? (
                    <a
                      href={links[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <Link to={links[index]}>{CardContent}</Link>
                  )
                ) : (
                  CardContent
                )}
              </div>
            );
          })}
        </div>{" "}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 md:group-hover:opacity-100 md:opacity-0 sm:opacity-70 transition-opacity duration-300 -mt-2">
          <button
            onClick={scrollLeft}
            style={{
              background: "rgba(63,63,70, 0.6)",
            }}
            className="text-black px-1 py-2 sm:py-4 md:py-18 rounded shadow-lg hover:bg-gray-200 transition-colors w-8 h-8 sm:w-10 sm:h-10 md:w-auto md:h-auto flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              role="img"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              className="sm:w-5 sm:h-5 md:w-6 md:h-6"
              aria-hidden="true"
              transform="rotate(180)"
            >
              <path
                d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>
        <div className="absolute right-1 sm:right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 md:group-hover:opacity-100 md:opacity-0 sm:opacity-70 transition-opacity duration-300 -mt-2">
          <button
            onClick={scrollRight}
            style={{
              background: "rgba(63,63,70, 0.6)",
            }}
            className="text-black px-1 py-2 sm:py-4 md:py-18 rounded shadow-lg hover:bg-gray-200 transition-colors w-8 h-8 sm:w-10 sm:h-10 md:w-auto md:h-auto flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              role="img"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              className="sm:w-5 sm:h-5 md:w-6 md:h-6"
              aria-hidden="true"
            >
              <path
                d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardRow;
