import React from "react";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/Header";
import CardRow from "../../components/CardRow";
import { ReactTerminal } from "react-terminal";

function Recruiter() {
  const cardData = {
    images: [
      "https://i.ibb.co/6RswpdgW/project.jpg",
      "https://i.ibb.co/d4R5TvD3/dave-michael-ied-YX4wsxw-I-unsplash.jpg",
      "https://i.ibb.co/yBX4v91v/image.png",
      "https://images.unsplash.com/photo-1663435538397-822d13e4fe18?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://i.ibb.co/3yG8fQbX/terminal.jpg",
      "https://i.ibb.co/nqGKFBj2/image.png",
      "https://i.ibb.co/Xk7q6ntP/github-mark.png",
    ],
    cardName: [
      "Projects",
      "Skills",
      "Contact Me",
      "Memes",
      "Fun Terminal",
      "Experience",
      "Github",
    ],
    links: [
      "/Project",
      "/skills",
      "/Hire",
      "/meme",
      "/Terminal",
      "/professional",
      "https://github.com/shadowguy01234",
    ],
  };

  const continueWatchingData = {
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      "https://i.ibb.co/Xk7q6ntP/github-mark.png",
      "https://i.ibb.co/3yG8fQbX/terminal.jpg",
      "https://images.unsplash.com/photo-1663435538397-822d13e4fe18?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    cardName: ["Music", "Github", "Fun Terminal", "Memes"],
    links: [
      "/music",
      "https://github.com/shadowguy01234",
      "/Terminal",
      "/meme",
    ],
  };
  return (
    <>
      <div className="bg-[#141414] w-full min-h-screen">
        <Header avatar={"https://i.ibb.co/Q7tdv0Qc/image.png"} />
        <div>
          <HeroSection
            className={
              "h-[75vh] sm:h-[60vh] md:h-[75vh] items-center bg-center"
            }
            title={"Anurag Banerjee - Aspiring Developer"}
            video={
              "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif"
            }
            content={
              "Passionate and self-driven Developer with a strong foundation in full-stack web development and a love for building meaningful digital experiences.I enjoy crafting responsive, user-friendly interfaces and connecting them with powerful backends. My toolkit includes JavaScript, React, Node.js, and Express, and I'm always exploring new technologies and design patterns. Whether it's developing clean UI components or integrating APIs, I bring curiosity, creativity, and a problem-solving mindset to every project."
            }
          />
        </div>
        <div className="pb-2 px-2 sm:px-0">
          <CardRow
            title="Today's Top Picks for Developers"
            images={cardData.images}
            CardName={cardData.cardName}
            links={cardData.links}
          />
          <CardRow
            title={"Continue Watching for Developers"}
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
