import React, { useState } from "react";
import Header from "../../components/Header";
import DestinationCard from "../../components/DestinationCard";

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(2); 

  const destinations = [
    {
      id: 1,
      name: "Santorini",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=600&fit=crop",
      description:
        "A breathtaking Greek island with stunning sunsets, white-washed buildings, and crystal blue waters. The perfect romantic getaway.",
    },
    {
      id: 2,
      name: "Kyoto",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=600&fit=crop",
      description:
        "Ancient temples, beautiful cherry blossoms, and traditional Japanese culture. A serene escape into history and nature.",
    },
    {
      id: 3,
      name: "Iceland",
      image:
        "https://images.unsplash.com/photo-1539066909543-605301a8c69f?w=400&h=600&fit=crop",
      description:
        "Dramatic landscapes with waterfalls, glaciers, and the Northern Lights. An adventurer's paradise of natural wonders.",
    },
    {
      id: 4,
      name: "Patagonia",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=600&fit=crop",
      description:
        "Untamed wilderness at the end of the world. Towering peaks, pristine lakes, and endless hiking adventures.",
    },
    {
      id: 5,
      name: "Morocco",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=600&fit=crop",
      description:
        "Vibrant markets, stunning architecture, and rich cultural heritage. A sensory journey through ancient traditions.",
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
