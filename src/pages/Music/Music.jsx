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
      artistLink: "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb",
      topTracks: ["Creep", "Karma Police", "No Surprises"],
      trackLinks: [
        "https://open.spotify.com/track/70LcF31zb1H0PyJoS1Sx1r",
        "https://open.spotify.com/track/63OQupATfueTbGkDxkjJYN",
        "https://open.spotify.com/track/6b2oQwSGFkzsMtQjfvbGd1",
      ],
      seeTopTracksLink:
        "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb",
    },
    {
      id: 2,
      name: "Pink Floyd",
      image: "https://picsum.photos/400/400?random=2",
      artistLink: "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9",
      topTracks: [
        "Comfortably Numb",
        "Wish You Were Here",
        "Another Brick in the Wall",
      ],
      trackLinks: [
        "https://open.spotify.com/track/4gMgiXfqyzZLMhsksGmbQV",
        "https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1",
        "https://open.spotify.com/track/1Tqn7hfbZPjOy9ORy8K5zr",
      ],
      seeTopTracksLink:
        "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9",
    },
    {
      id: 3,
      name: "The Weeknd",
      image: "https://picsum.photos/400/400?random=3",
      artistLink: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
      topTracks: ["Blinding Lights", "The Hills", "Can't Feel My Face"],
      trackLinks: [
        "https://open.spotify.com/track/0VjIjW4GlUKhIiokGhaDiR",
        "https://open.spotify.com/track/7fBv7CLKzipRk6EC6TWHOB",
        "https://open.spotify.com/track/01Ix9xYXjl3F8W9vRTBjOa",
      ],
      seeTopTracksLink:
        "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
    },
    {
      id: 4,
      name: "Lindsey Stirling",
      image: "https://picsum.photos/400/400?random=4",
      artistLink: "https://open.spotify.com/artist/2aGWGNaQMEJqWnMmrcCE7u",
      topTracks: ["Crystallize", "Elements", "Shatter Me"],
      trackLinks: [
        "https://open.spotify.com/track/0YvgQhSWTbw6z3D3DhxwQd",
        "https://open.spotify.com/track/4kYjHqVPu0eJv3kJUQFg2A",
        "https://open.spotify.com/track/5XqKBJJZez2fPWnTJ2S4YX",
      ],
      seeTopTracksLink:
        "https://open.spotify.com/artist/2aGWGNaQMEJqWnMmrcCE7u",
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

  useEffect(() => {
    setPlaylist(recentTracks);
  }, []);

  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <Header />
      <div className="pt-20 px-8 pb-32">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-white bg-clip-text ">
            My Sonic Spectrum
          </h1>
          <p className="text-xl text-gray-400">
            A collection of tracks that power my code
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 underline decoration-red-500 decoration-2 underline-offset-7">
            Top Genres
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topGenres.map((genre) => (
              <MusicGenreCard key={genre.id} genre={genre} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 underline decoration-red-500 decoration-2 underline-offset-7">
            Coding Vibes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingVibes.map((vibe) => (
              <MusicGenreCard key={vibe.id} genre={vibe} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 underline decoration-red-500 decoration-2 underline-offset-7">
            Artists I'm Loyal To
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loyalArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 underline decoration-red-500 decoration-2 underline-offset-7">
            Recently Obsessed With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentTracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </section>
      </div>

      <MusicPlayer tracks={recentTracks} />
    </div>
  );
};

export default Music;
