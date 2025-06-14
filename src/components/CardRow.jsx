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
    <div className="mb-8">
      <div className="text-white text-2xl font-bold ml-8 mt-6">{title}</div>
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          className="flex mt-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, index) => {
            const CardContent = (
              <div
                className={`relative ${
                  index === 0 ? "ml-8" : "ml-4"
                } flex-shrink-0 overflow-hidden rounded-md cursor-pointer`}
              >
                <img
                  className="max-w-72 max-h-auto transition-all duration-300 hover:scale-110 hover:shadow-[8px_8px_10px_rgba(239,68,68,0.8)]"
                  src={image}
                  alt="placeholder"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="text-white text-xl font-bold text-center rounded">
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
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-2">
          <button
            onClick={scrollLeft}
            style={{
              background: "rgba(63,63,70, 0.4)",
            }}
            className="text-black px-1 py-18 rounded shadow-lg hover:bg-gray-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              role="img"
              viewBox="0 0 24 24"
              width="24"
              height="24"
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
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-2">
          <button
            onClick={scrollRight}
            style={{
              background: "rgba(63,63,70, 0.4)",
            }}
            className="text-black px-1 py-18 rounded shadow-lg hover:bg-gray-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              role="img"
              viewBox="0 0 24 24"
              width="24"
              height="24"
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
