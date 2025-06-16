import React from "react";

const MusicGenreCard = ({ genre }) => {
  return (
    <div
      className={`relative bg-gradient-to-br ${genre.color} rounded-lg p-6 h-40 cursor-pointer transition-all duration-300 hover:shadow-[-8px_8px_15px_rgba(239,68,68,0.3),_8px_8px_15px_rgba(239,68,68,0.3)] group overflow-hidden`}
    >
      <div className="relative z-10">
        <div className="text-4xl mb-2">{genre.icon}</div>
        <h3 className="text-xl font-bold text-white">{genre.name}</h3>
        {genre.description && (
          <p className="text-sm text-white/80 mt-1">{genre.description}</p>
        )}
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>

      <div className="absolute inset-0  duration-300"></div>
    </div>
  );
};

export default MusicGenreCard;
