import React from "react";

const SpotifyEmbed = ({ spotifyUrl, title, artist }) => {
  const getSpotifyEmbedUrl = (url) => {
    if (!url) return null;

    let trackId = null;

    if (url.includes("track/")) {
      trackId = url.split("track/")[1].split("?")[0];
    }

    return trackId
      ? `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`
      : null;
  };

  const embedUrl = getSpotifyEmbedUrl(spotifyUrl);

  if (!embedUrl) return null;

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[-8px_8px_15px_rgba(239,68,68,0.3),_8px_8px_15px_rgba(239,68,68,0.3)] cursor-pointer group">
      <div className="p-4 border-b border-zinc-700">
        <h3 className="text-lg font-bold text-white mb-1 truncate">{title}</h3>
        <p className="text-sm text-gray-400">{artist}</p>
      </div>

      <div className="p-4">
        <iframe
          src={embedUrl}
          width="100%"
          height="152"
          allowtransparency="true"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-lg"
        />
      </div>

      <div className="p-4 pt-0">
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors text-sm"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          Open in Spotify
        </a>
      </div>
    </div>
  );
};

export default SpotifyEmbed;
