import React from "react";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/Header";
import CardRow from "../../components/CardRow";

function Recruiter() {
  const cardData = {
    images: [
      "https://i.ibb.co/6RswpdgW/project.jpg",
      "https://i.ibb.co/d4R5TvD3/dave-michael-ied-YX4wsxw-I-unsplash.jpg",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
    cardName: ["Projects", "Skills"],
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
              "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif"
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
          />
          <CardRow
            title={"Continue Watching for recruiter"}
            images={cardData.images}
            CardName={cardData.cardName}
          />
        </div>
      </div>
    </>
  );
}

export default Recruiter;
