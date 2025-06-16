import React from "react";
import Header from "../../components/Header";
import PlatformCard from "../../components/PlatformCard";
import GenreCard from "../../components/GenreCard";
import GameCard from "../../components/GameCard";

const Game = () => {
  const platforms = [
    {
      id: 1,
      name: "PC",
      icon: "🖥️",
      bgColor: "bg-gradient-to-br from-teal-600 to-teal-800",
      description: "Steam, Epic Games, Origin",
    },
    {
      id: 2,
      name: "PlayStation",
      icon: "🎮",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
      description: "PS4 & PS5 Gaming",
    },
    {
      id: 3,
      name: "Xbox",
      icon: "⚡",
      bgColor: "bg-gradient-to-br from-green-600 to-green-800",
      description: "Game Pass Ultimate",
    },
    {
      id: 4,
      name: "Nintendo",
      icon: "🎯",
      bgColor: "bg-gradient-to-br from-red-600 to-red-800",
      description: "Switch & Retro Gaming",
    },
  ];

  const topGenres = [
    {
      id: 1,
      name: "Role-Playing",
      icon: "🐉",
      bgColor: "bg-gradient-to-br from-orange-600 to-orange-800",
      description: "Epic adventures & character development",
    },
    {
      id: 2,
      name: "Adventure",
      icon: "🗺️",
      bgColor: "bg-gradient-to-br from-teal-600 to-teal-800",
      description: "Exploration & puzzle solving",
    },
    {
      id: 3,
      name: "Action",
      icon: "✊",
      bgColor: "bg-gradient-to-br from-purple-600 to-purple-800",
      description: "Fast-paced combat & thrills",
    },
    {
      id: 4,
      name: "Strategy",
      icon: "♜",
      bgColor: "bg-gradient-to-br from-yellow-600 to-yellow-800",
      description: "Tactical thinking & planning",
    },
  ];

  const mostPlayedGames = [
    {
      id: 1,
      title: "The Witcher 3",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      description: "Wild Hunt - Complete Edition",
      platform: "PC",
      rating: "9.8",
    },
    {
      id: 2,
      title: "The Legend of Zelda",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      description: "Breath of the Wild",
      platform: "Nintendo Switch",
      rating: "9.7",
    },
    {
      id: 3,
      title: "Persona 5 Royal",
      image:
        "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop",
      description: "Enhanced edition with new content",
      platform: "PlayStation",
      rating: "9.6",
    },
    {
      id: 4,
      title: "Stardew Valley",
      image:
        "https://images.unsplash.com/photo-1574113878523-5e88e6cd4e31?w=400&h=300&fit=crop",
      description: "Relaxing farming simulation",
      platform: "Multi-platform",
      rating: "9.5",
    },
  ];

  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <Header />
      <div className="pt-20 px-8 pb-32">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-white">My Game World</h1>
          <p className="text-xl text-gray-400">
            A showcase of the games that shaped me
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 underline decoration-red-500 decoration-2 underline-offset-7">
            Platforms I Play On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 underline decoration-red-500 decoration-2 underline-offset-7">
            Top Genres
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topGenres.map((genre) => (
              <GenreCard key={genre.id} genre={genre} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 underline decoration-red-500 decoration-2 underline-offset-7">
            Most Played
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mostPlayedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default Game;
