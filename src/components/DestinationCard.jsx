import React from "react";

const DestinationCard = ({ destination, isHighlighted = false }) => {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isHighlighted
          ? "ring-2 ring-cyan-400 shadow-lg shadow-cyan-400/20"
          : "hover:ring-2 hover:ring-cyan-400/50"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-2xl font-bold text-center">
            {destination.name}
          </h3>
        </div>

      
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold mb-3">
              {destination.name}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {destination.description}
            </p>
          </div>
        </div>

       
        {isHighlighted && (
          <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400 pointer-events-none" />
        )}
      </div>
    </div>
  );
};

export default DestinationCard;
