import React from "react";

const PlatformCard = ({ platform }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-700/50">
      <div className="flex flex-col items-center text-center">
        <div
          className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white text-2xl ${platform.bgColor}`}
        >
          {platform.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
        <p className="text-gray-400 text-sm">{platform.description}</p>
      </div>
    </div>
  );
};

export default PlatformCard;
