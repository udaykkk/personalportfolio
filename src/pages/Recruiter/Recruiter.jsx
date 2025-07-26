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
      "https://github.com/udaykkk/udaykkk",
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
        <Header avatar={"https://i.ibb.co/5gvCxQNQ/image.png"} />
        <div>
          <HeroSection
            className={
              "h-[75vh] sm:h-[60vh] md:h-[75vh] items-center bg-center"
            }
            title={"Udaykrishna - Full-Stack Developer | Eager to Grow"}
            video={
              "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif"
            }
            content={
              "I'm a dedicated and detail-oriented web developer with a strong foundation in full-stack development and a passion for solving real-world problems through code. Currently focused on building responsive, user-friendly applications using technologies like React, Node.js, and Express. I'm eager to contribute to meaningful projects, grow within a collaborative team, and continuously enhance my skills in both frontend and backend development."
            }
          />
        </div>
        <div className="pb-2 px-2 sm:px-0">
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
