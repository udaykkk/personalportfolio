import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-700/50 overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{game.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{game.platform}</span>
          <span className="text-sm text-yellow-400">⭐ {game.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
