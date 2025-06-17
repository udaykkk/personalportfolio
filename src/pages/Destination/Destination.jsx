import React, { useState } from "react";
import Header from "../../components/Header";
import DestinationCard from "../../components/DestinationCard";

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(2); 

  const destinations = [
    {
      id: 1,
      name: "Monaco",
      image:
        "https://images.unsplash.com/photo-1613732764162-251c03439b53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Monaco, where speed meets luxury on the streets of royalty.The Monaco Grand Prix is not just a race, it's a spectacle on asphalt.One day, I'll be there engines roaring, champagne flying, heart racing. 🏁✨",
    },
    {
      id: 2,
      name: "Japan",
      image:
        "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Ancient temples, beautiful cherry blossoms, and traditional Japanese culture. A serene escape into history and nature.",
    },
    {
      id: 3,
      name: "Leh-Ladakh, J&K",
      image:
        "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Endless mountains, turquoise lakes, and roads that touch the sky.Every turn feels like a desktop wallpaper come to life.A dream for bikers, backpackers, and peace-seekers alike.",
    },
    {
      id: 4,
      name: "Gangtok, Sikkim",
      image:
        "https://plus.unsplash.com/premium_photo-1697730403371-4637af8a7bf9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A hill town wrapped in clouds, culture, and calm.Prayer flags flutter above winding roads and cozy cafés.Perfect for soul-searching with a side of momo and mountain views."
    },
    {
      id: 5,
      name: "Kerela",
      image:
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Backwaters, beaches, and the sound of rustling palms.From houseboat sunsets to spicy food trails, it's pure magic.They don't call it “God's Own Country” for nothing.",
    },
  ];

  const handleDestinationClick = (destinationId) => {
    setSelectedDestination(destinationId);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Header />
      <div className="pt-20 pb-32">
        <div className="text-center mb-16 px-8">
          <h1 className="text-6xl font-bold mb-6 text-white">
            Dream Destinations
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the places I wish to visit.
          </p>
        </div>

        <div className="px-8 mb-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  onClick={() => handleDestinationClick(destination.id)}
                >
                  <DestinationCard
                    destination={destination}
                    isHighlighted={selectedDestination === destination.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Destination;
