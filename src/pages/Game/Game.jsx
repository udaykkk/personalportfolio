import React from "react";
import Header from "../../components/Header";
import PlatformCard from "../../components/PlatformCard";
import GenreCard from "../../components/GenreCard";
import GameCard from "../../components/GameCard";
import { GiPistolGun } from "react-icons/gi";

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
      name: "Mobile",
      icon: "📱",
      bgColor: "bg-gradient-to-br from-green-600 to-green-800",
      description: "Andriod Gaming",
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
      name: "First Person Shooter",
      icon: <GiPistolGun />,
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
      icon: "⚡",
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
      title: "Batman Arkham Series",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/6c/Batman_Arkham_Knight_Cover_Art.jpg",
      description: "One of the best 3rd person Action-Adventure",
      platform: "PC, PS4",
      rating: "9.8",
    },
    {
      id: 2,
      title: "Grand Theft auto",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Grand_Theft_Auto_logo_series.svg",
      description: "One of the greatest game ever made",
      platform: "PC, PS4, PS5, Xbox",
      rating: "9.7",
    },
    {
      id: 3,
      title: "Cyberpunk-2077",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
      description: "Modern-Genre defining open world",
      platform: "PC, PS4, PS5, Xbox",
      rating: "9.6",
    },
    {
      id: 4,
      title: "Need for Speed-Most Wanted (2005)",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg",
      description: "Best arcade racing game",
      platform: "PC",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
