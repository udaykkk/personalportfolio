import React from "react";

const MemeCard = ({ meme }) => {
  const isVideo =
    meme.url &&
    (meme.url.endsWith(".mp4") ||
      meme.url.endsWith(".webm") ||
      meme.url.endsWith(".gif"));

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-700/50 overflow-hidden break-inside-avoid mb-6 cursor-pointer group">
      <div className="relative">
        {isVideo ? (
          <video
            src={meme.url}
            alt={meme.title}
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={meme.url}
            alt={meme.title}
            className="w-full h-auto object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center p-4">
            <h3 className="text-white text-lg font-bold mb-2">{meme.title}</h3>
            {meme.category && (
              <span className="text-gray-300 text-sm bg-gray-800/80 px-3 py-1 rounded-full">
                {meme.category}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h4 className="text-white font-semibold text-sm truncate mb-1">
          {meme.title}
        </h4>
        {meme.tags && (
          <div className="flex flex-wrap gap-1">
            {meme.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemeCard;
