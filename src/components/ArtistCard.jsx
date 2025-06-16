import React from "react";

const ArtistCard = ({ artist }) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 transition-all duration-300  hover:shadow-[-8px_8px_15px_rgba(239,68,68,0.3),_8px_8px_15px_rgba(239,68,68,0.3)] cursor-pointer group">
      <div className="relative mb-4">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full aspect-square object-cover rounded-lg"
        />
      </div>

      <a
        href={artist.artistLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-sm text-gray-400 hover:text-white transition-colors cursor-pointer hover:underline"
      >
        <h3 className="text-lg font-bold text-white mb-2">{artist.name}</h3>
      </a>

      <div className="space-y-1">
        {artist.topTracks.slice(0, 3).map((track, index) => (
          <a
            key={index}
            href={artist.trackLinks?.[index] || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-gray-400 hover:text-white transition-colors cursor-pointer hover:underline"
          >
            {track}
          </a>
        ))}
      </div>

      <a
        href={artist.seeTopTracksLink || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-sm text-gray-400 hover:text-white transition-colors hover:underline"
      >
        See Top Tracks
      </a>
    </div>
  );
};

export default ArtistCard;
