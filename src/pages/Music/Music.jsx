import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import MusicGenreCard from "../../components/MusicGenreCard";
import ArtistCard from "../../components/ArtistCard";
import TrackCard from "../../components/TrackCard";
import MusicPlayer from "../../components/MusicPlayer";
import { MusicPlayerContext } from "../../Context/MusicPlayerContext";

const Music = () => {
  const { setPlaylist } = useContext(MusicPlayerContext);
  const topGenres = [
    {
      id: 1,
      name: "Rock",
      icon: "🎸",
      color: "from-red-600 to-red-800",
      tracks: ["Bohemian Rhapsody", "Stairway to Heaven", "Sweet Child O Mine"],
    },
    {
      id: 2,
      name: "Lo-Fi",
      icon: "🎧",
      color: "from-teal-600 to-teal-800",
      tracks: ["Lofi Hip Hop", "Study Beats", "Chill Vibes"],
    },
    {
      id: 3,
      name: "Synthwave",
      icon: "🎹",
      color: "from-purple-600 to-purple-800",
      tracks: ["Neon Dreams", "Retrowave", "Cyberpunk 2077"],
    },
    {
      id: 4,
      name: "Classical",
      icon: "🎻",
      color: "from-yellow-700 to-yellow-900",
      tracks: ["Canon in D", "Moonlight Sonata", "Symphony No. 9"],
    },
  ];

  const codingVibes = [
    {
      id: 1,
      name: "Chill",
      icon: "😎",
      color: "from-indigo-600 to-indigo-800",
      description: "Relaxed coding sessions",
    },
    {
      id: 2,
      name: "Work Vibes",
      icon: "🚀",
      color: "from-blue-600 to-blue-800",
      description: "Productive focus music",
    },
    {
      id: 3,
      name: "Heartbeat",
      icon: "❤️",
      color: "from-red-600 to-red-800",
      description: "Energetic coding beats",
    },
    {
      id: 4,
      name: "Mindful",
      icon: "🧘",
      color: "from-green-600 to-green-800",
      description: "Meditative programming",
    },
  ];

  const loyalArtists = [
    {
      id: 1,
      name: "Radiohead",
      image: "https://picsum.photos/400/400?random=1",
      topTracks: ["Creep", "Karma Police", "No Surprises"],
    },
    {
      id: 2,
      name: "Pink Floyd",
      image: "https://picsum.photos/400/400?random=2",
      topTracks: [
        "Comfortably Numb",
        "Wish You Were Here",
        "Another Brick in the Wall",
      ],
    },
    {
      id: 3,
      name: "The Weeknd",
      image: "https://picsum.photos/400/400?random=3",
      topTracks: ["Blinding Lights", "The Hills", "Can't Feel My Face"],
    },
    {
      id: 4,
      name: "Lindsey Stirling",
      image: "https://picsum.photos/400/400?random=4",
      topTracks: ["Crystallize", "Elements", "Shatter Me"],
    },
  ];

  const recentTracks = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "https://picsum.photos/400/400?random=5",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      title: "Midnight City",
      artist: "M83",
      image: "https://picsum.photos/400/400?random=6",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 3,
      title: "Clair de Lune",
      artist: "Claude Debussy",
      image: "https://picsum.photos/400/400?random=7",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      id: 4,
      title: "Dawn FM",
      artist: "The Weeknd",
      image: "https://picsum.photos/400/400?random=8",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
  ];

  // Set playlist when component mounts
  useEffect(() => {
    setPlaylist(recentTracks);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <div className="pt-20 px-8 pb-32">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            My Sonic Spectrum
          </h1>
          <p className="text-xl text-gray-400">
            A collection of tracks that power my code
          </p>
        </div>

        {/* Top Genres */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Top Genres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topGenres.map((genre) => (
              <MusicGenreCard key={genre.id} genre={genre} />
            ))}
          </div>
        </section>

        {/* Coding Vibes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Coding Vibes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingVibes.map((vibe) => (
              <MusicGenreCard key={vibe.id} genre={vibe} />
            ))}
          </div>
        </section>

        {/* Artists I'm Loyal To */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Artists I'm Loyal To</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loyalArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>

        {/* Recently Obsessed With */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recently Obsessed With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentTracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </section>
      </div>

      {/* Music Player */}
      <MusicPlayer tracks={recentTracks} />
    </div>
  );
};

export default Music;
