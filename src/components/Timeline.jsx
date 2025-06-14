import React from "react";

function TimelineItem({
  position,
  company,
  duration,
  technologies,
  achievements,
  isLeft = true,
}) {
  return (
    <div className="relative flex items-center mb-16">
      {/* Timeline line and circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center h-full">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center z-10">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path
              fillRule="evenodd"
              d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-1 bg-white flex-1 mt-2"></div>
      </div>

      {/* Content */}
      <div className={`w-5/12 ${isLeft ? "pr-8" : "ml-auto pl-8"}`}>
        <div
          className={`${
            isLeft ? "bg-blue-500" : "bg-gray-200"
          } p-6 rounded-lg shadow-lg relative`}
        >
          {/* Arrow */}
          <div
            className={`absolute top-4 ${
              isLeft ? "-right-2" : "-left-2"
            } w-4 h-4 ${
              isLeft ? "bg-blue-500" : "bg-gray-200"
            } transform rotate-45`}
          ></div>

          <h3
            className={`text-xl font-bold mb-2 ${
              isLeft ? "text-white" : "text-gray-800"
            }`}
          >
            {position}
          </h3>
          <h4
            className={`text-lg font-semibold mb-3 ${
              isLeft ? "text-blue-100" : "text-gray-600"
            }`}
          >
            {company}
          </h4>

          <div
            className={`flex items-center mb-4 ${
              isLeft ? "text-blue-100" : "text-gray-600"
            }`}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">{technologies}</span>
          </div>

          <ul
            className={`space-y-2 ${isLeft ? "text-white" : "text-gray-700"}`}
          >
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">*</span>
                <span className="text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Duration */}
      <div className={`absolute ${isLeft ? "right-4" : "left-4"} top-4`}>
        <span className="text-gray-400 text-sm font-medium">{duration}</span>
      </div>
    </div>
  );
}

export default TimelineItem;
