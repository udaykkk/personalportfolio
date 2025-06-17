import React from "react";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/Header";
import CardRow from "../../components/CardRow";

function Adventurer() {
  const topPicksData = {
    images: [
      "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://i.ibb.co/d4R5TvD3/dave-michael-ied-YX4wsxw-I-unsplash.jpg",
      "https://i.ibb.co/6RswpdgW/project.jpg", 
      "https://images.unsplash.com/photo-1663435538397-822d13e4fe18?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://i.ibb.co/3yG8fQbX/terminal.jpg",
      "https://i.ibb.co/Xk7q6ntP/github-mark.png",
    ],
    cardName: [
      "Destination",
      "Skills",
      "Project",
      "Memes",
      "Fun Terminal",
      "Github",
    ],
    links: [
      "/destination",
      "/skills",
      "/Project",
      "/meme",
      "/Terminal",
      "https://github.com/shadowguy01234",
    ],
  };

  const continueWatchingData = {
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop", 
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://i.ibb.co/yBX4v91v/image.png", 
    ],
    cardName: ["Music", "Game", "Contact Me"],
    links: ["/music", "/game", "/Hire"],
  };

  return (
    <>
      <div className="bg-[#141414] w-full min-h-screen">
        <Header avatar={"src/assets/Adventurer.png"} />
        <div>
          <HeroSection
            className={"h-[75vh] items-center bg-center"}
            title={"Anurag Banerjee - Traveling One Dream at a Time"}
            video={
              "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemI0YnplNnNzYTF5aTRmZWhpNnR5bDl2ZnVrY2VoeHFqbXFjdTd3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m9fmg3MQj8wb1FcOjY/giphy.gif"
            }
            content={
              "More than just a developer - I'm a traveler at heart, chasing sunrises in unfamiliar cities and collecting stories from strangers.Whether it's the serene silence of Ladakh, the vibrant chaos of Varanasi, or theneon calm of Tokyo at night — I believe every place has a rhythm."
            }
          />
        </div>
        <div className="pb-2">
          <CardRow
            title="Today's Top Picks for Adventurer"
            images={topPicksData.images}
            CardName={topPicksData.cardName}
            links={topPicksData.links}
          />
          <CardRow
            title="Continue Watching for Adventurer"
            images={continueWatchingData.images}
            CardName={continueWatchingData.cardName}
            links={continueWatchingData.links}
          />
        </div>
      </div>
    </>
  );
}

export default Adventurer;
