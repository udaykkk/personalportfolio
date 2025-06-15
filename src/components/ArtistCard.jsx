import React from "react";

const ArtistCard = ({ artist }) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 transition-all duration-300 hover:bg-zinc-800 hover:scale-105 cursor-pointer group">
      <div className="relative mb-4">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full aspect-square object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
          <button className="bg-green-500 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{artist.name}</h3>

      <div className="space-y-1">
        {artist.topTracks.slice(0, 3).map((track, index) => (
          <p
            key={index}
            className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {track}
          </p>
        ))}
      </div>

      <button className="mt-3 text-sm text-gray-400 hover:text-white transition-colors">
        See Top Tracks
      </button>
    </div>
  );
};

export default ArtistCard;
