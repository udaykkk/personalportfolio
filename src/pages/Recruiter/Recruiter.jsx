import React from "react";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/Header";
import CardRow from "../../components/CardRow";

function Recruiter() {
  const cardData = {
    images: [
      "https://i.ibb.co/d4R5TvD3/dave-michael-ied-YX4wsxw-I-unsplash.jpg",
      "https://i.ibb.co/6RswpdgW/project.jpg",
      "https://i.ibb.co/nqGKFBj2/image.png",
      "https://i.ibb.co/yBX4v91v/image.png",
      "https://i.ibb.co/Xk7q6ntP/github-mark.png",
    ],
    cardName: ["Skills", "Projects", "Experience", "Contact Me", "Github"],
    links: [
      "/skills",
      "/Project",
      "/professional",
      "/Hire",
      "https://github.com/shadowguy01234",
    ],
  };

  const continueWatchingData = {
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      "https://i.ibb.co/yBX4v91v/image.png",
      "https://i.ibb.co/3yG8fQbX/terminal.jpg",
    ],
    cardName: ["Music", "Contact Me", "Fun Terminal"],
    links: ["/music", "/Hire", "/Terminal"],
  };

  return (
    <>
      <div className="bg-[#141414] w-full min-h-screen">
        <Header avatar={"src/assets/Recruiter.png"} />
        <div>
          <HeroSection
            className={"h-[75vh] items-center bg-center"}
            title={"Anurag Banerjee - Aspiring Developer"}
            video={
              "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif"
            }
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque orci id neque scelerisque commodo ac eu neque. Maecenas ut rutrum mauris. Duis feugiat leo sed euismod ullamcorper. Sed dictum, ante vel varius lacinia, eros arcu fermentum urna, vitae suscipit tellus lectus sit amet enim. Vivamus pharetra volutpat ante non auctor. Mauris at libero tincidunt, mollis ex sollicitudin, fringilla velit. Duis sed mi id ante vulputate ultrices id ac quam. Fusce iaculis eu ligula imperdiet tincidunt. Nulla consectetur bibendum mauris eget tristique."
            }
          />
        </div>
        <div className="pb-2">
          <CardRow
            title="Today's Top Picks for recruiter"
            images={cardData.images}
            CardName={cardData.cardName}
            links={cardData.links}
          />
          <CardRow
            title={"Continue Watching for recruiter"}
            images={continueWatchingData.images}
            CardName={continueWatchingData.cardName}
            links={continueWatchingData.links}
          />
        </div>
      </div>
    </>
  );
}

export default Recruiter;
