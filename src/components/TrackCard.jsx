import React, { useContext } from "react";
import { MusicPlayerContext } from "../Context/MusicPlayerContext.jsx";

const TrackCard = ({ track }) => {
  const { playTrack, currentTrack, isPlaying } = useContext(MusicPlayerContext);

  const isCurrentTrack = currentTrack?.id === track.id;

  const handlePlay = () => {
    playTrack(track);
  };

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[-8px_8px_15px_rgba(239,68,68,0.3),_8px_8px_15px_rgba(239,68,68,0.3)] cursor-pointer group">
      <div className="relative">
        <img
          src={track.image}
          alt={track.title}
          className="w-full aspect-square object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={handlePlay}
            className="bg-green-500 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-green-400"
          >
            {isCurrentTrack && isPlaying ? (
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {isCurrentTrack && (
          <div className="absolute top-2 right-2">
            <div className="bg-green-500 rounded-full p-1">
              <svg
                className="w-4 h-4 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 truncate">
          {track.title}
        </h3>
        <p className="text-sm text-gray-400">{track.artist}</p>
      </div>
    </div>
  );
};

export default TrackCard;
