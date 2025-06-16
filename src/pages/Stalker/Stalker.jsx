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

  return (
    <>
      <div className="bg-[#141414] w-full min-h-screen">
        <Header avatar={"src/assets/Recruiter.png"}/>
        <div>
          <HeroSection
            className={"h-[75vh] items-center bg-center"}
            title={"Anurag Banerjee - Aspiring Developer"}
            video={
              "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzk3ZXBhZHN4bG9iMTB3YW9xd285enp5M254Z3M2amRvb3plYnB5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/88QpRdAzV5z5KHygOn/giphy.gif"
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
            title="Today's Top Picks for recruiter"
            images={cardData.images}
            CardName={cardData.cardName}
            links={cardData.links}
          />
        </div>
      </div>
    </>
  );
}

export default Recruiter;
