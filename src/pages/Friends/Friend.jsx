import React from "react";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/Header";
import CardRow from "../../components/CardRow";

function Friends() {
  const topPicksData = {
    images: [
      "https://i.ibb.co/d4R5TvD3/dave-michael-ied-YX4wsxw-I-unsplash.jpg", 
      "https://i.ibb.co/6RswpdgW/project.jpg", 
      "https://images.unsplash.com/photo-1663435538397-822d13e4fe18?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://i.ibb.co/3yG8fQbX/terminal.jpg", 
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    cardName: ["Skills", "Project", "Memes", "Fun Terminal", "Games"],
    links: ["/skills", "/Project", "/meme", "/Terminal", "/game"],
  };


  const continueWatchingData = {
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop", 
      "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://i.ibb.co/yBX4v91v/image.png",
    ],
    cardName: ["Music", "Destination", "Contact Me"],
    links: ["/music", "/destination", "/Hire"],
  };

  return (
    <>
      <div className="bg-[#141414] w-full min-h-screen">
        <Header avatar={"https://i.ibb.co/C5KF6605/image.png"} />
        <div>
          <HeroSection
            className={"h-[75vh] items-center bg-center"}
            title={"Anurag Banerjee - This Page is Powered by Friendship & Wifi"}
            video={
              "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG12NzFyMzZyZWd2Y281dzRhdzFmbWp0cnV0d3IxZzJ3d3Z5cTU1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qur3qH5qrLpGJauEcj/giphy.gif"
            }
            content={
              "This corner of my site is just for the people who know me beyond the code.Whether it's late-night rants, weird playlists, inside jokes, or meme dumps — welcome to the fun side of Anurag.Scroll through, laugh a little, and maybe remind me to sleep on time."
            }
          />
        </div>
        <div className="pb-2">
          <CardRow
            title="Today's Top Picks for Friends"
            images={topPicksData.images}
            CardName={topPicksData.cardName}
            links={topPicksData.links}
          />
          <CardRow
            title="Continue Watching for Friends"
            images={continueWatchingData.images}
            CardName={continueWatchingData.cardName}
            links={continueWatchingData.links}
          />
        </div>
      </div>
    </>
  );
}

export default Friends;
