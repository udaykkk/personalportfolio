import React from "react";
import Header from "../../components/Header";
import MusicGenreCard from "../../components/MusicGenreCard";
import ArtistCard from "../../components/ArtistCard";
import SpotifyEmbed from "../../components/SpotifyEmbed";

const Music = () => {
  const topGenres = [
    {
      id: 1,
      name: "Pop",
      icon: "🎤",
      color: "from-red-600 to-red-800",
      tracks: ["Espresso", "Blinding Lights"],
    },
    {
      id: 2,
      name: "Desi",
      icon: "🎵",
      color: "from-teal-600 to-teal-800",
      tracks: ["Farebi", "Roshni"],
    },
    {
      id: 3,
      name: "Phonk",
      icon: "🔥",
      color: "from-purple-600 to-purple-800",
      tracks: ["Metamorphosis", "After Dark"],
    },
    {
      id: 4,
      name: "Rock",
      icon: "🎸",
      color: "from-yellow-700 to-yellow-900",
      tracks: ["Bohemian Rapsody", "We will rock you"],
    },
  ];

  const loyalArtists = [
    {
      id: 1,
      name: "AJR",
      image: "https://i.scdn.co/image/ab67616100005174e65fa0329c232ac6f5040f80",
      artistLink: "https://open.spotify.com/artist/6s22t5Y3prQHyaHWUN1R1C",
      topTracks: ["Bang!", "World's Smallest Voilin", "Burn the House Down"],
      trackLinks: [
        "https://open.spotify.com/track/2I2AqFb0f9UNnolWc2MafC?si=046d5df024734ce9",
        "https://open.spotify.com/track/68EkhVWIeULhHxcbi1QhzK?si=f6202e68eba546b2",
        "https://open.spotify.com/track/4u8Gkqyg87iGSW3hQbbnQZ?si=cc5816e296364a02",
      ],
      seeTopTracksLink:
        "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3Oe9Dq?si=fMZ_UOiZTVWz26tfIL2dvg",
    },
    {
      id: 2,
      name: "Kendrick Lamar",
      image: "https://i.scdn.co/image/ab6761610000517439ba6dcd4355c03de0b50918",
      artistLink:
        "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg?si=u5bv1wlTTkW46Dx8fMVrrQ",
      topTracks: ["All The Stars", "Not like us", "tv off"],
      trackLinks: [
        "https://open.spotify.com/track/3GCdLUSnKSMJhs4Tj6CV3s?si=274a9340bc424b24",
        "https://open.spotify.com/track/6AI3ezQ4o3HUoP6Dhudph3?si=91d04ab1b65a480e",
        "https://open.spotify.com/track/0aB0v4027ukVziUGwVGYpG?si=58568f4e7c524354",
      ],
      seeTopTracksLink:
        "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1IPOOk?si=1ee21a669ad046f9",
    },
    {
      id: 3,
      name: "Justin Bieber",
      image: "https://i.scdn.co/image/ab676161000051748ae7f2aaa9817a704a87ea36",
      artistLink:
        "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s?si=QB92kEqVQ0iNuGVkXbbwFw",
      topTracks: ["STAY", "Love Yourself", "Ghost"],
      trackLinks: [
        "https://open.spotify.com/track/567e29TDzLwZwfDuEpGTwo?si=65b3f664322a473b",
        "https://open.spotify.com/track/50kpGaPAhYJ3sGmk6vplg0?si=c96ad328d9d04d30",
        "https://open.spotify.com/track/6I3mqTwhRpn34SLVafSH7G?si=1be3970475ec42c4",
      ],
      seeTopTracksLink:
        "https://open.spotify.com/playlist/37i9dQZF1DXc2aPBXGmXrt?si=EEakuAe8TY2DPgDdBVbyLQ",
    },
    {
      id: 4,
      name: "Ritviz",
      image: "https://i.scdn.co/image/ab676161000051743bc0e5f9b29553ed9d2bce18",
      artistLink:
        "https://open.spotify.com/artist/72beYOeW2sb2yfcS4JsRvb?si=GsSUtmUrSySOkgJZX8tD3A",
      topTracks: ["Liggi", "Udd Gaye", "Ari Ari"],
      trackLinks: [
        "https://open.spotify.com/track/7tbzfR8ZvZzJEzy6v0d6el?si=c24db3bbd9ce4529",
        "https://open.spotify.com/track/5ZsAhuQ24mWHiduaxJqnhW?si=79474ea1555e4127",
        "https://open.spotify.com/track/3edqjLVQrRPLvt9FAYUAsT?si=a75ae4bf88224f08",
      ],
      seeTopTracksLink:
        "https://open.spotify.com/playlist/37i9dQZF1DZ06evO49YTXz?si=bf249afcd7674cd5",
    },
  ];

  const featuredSpotifyTracks = [
    {
      id: 1,
      title: "Roshni",
      artist: "Chaar Diwaari",
      spotifyUrl:
        "https://open.spotify.com/track/2HG7HYy6d5aVAPoBNdWjs6?si=af8333e16a1c493d",
    },
    {
      id: 2,
      title: "Not like us",
      artist: "Kendrick Lamar",
      spotifyUrl:
        "https://open.spotify.com/track/6AI3ezQ4o3HUoP6Dhudph3?si=34bb13e978fc4b94",
    },
    {
      id: 3,
      title: "Attention",
      artist: "Charlie Puth",
      spotifyUrl:
        "https://open.spotify.com/track/5cF0dROlMOK5uNZtivgu50?si=4eeee3c3ab3c40af",
    },
    {
      id: 4,
      title: "Die with a Smile",
      artist: "Bruno Mars, Lady Gaga",
      spotifyUrl:
        "https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe?si=8c1051f7ef224fdb",
    },
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredSpotifyTracks.map((track) => (
              <SpotifyEmbed
                key={track.id}
                spotifyUrl={track.spotifyUrl}
                title={track.title}
                artist={track.artist}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Music;
