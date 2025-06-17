import React from "react";
import MemeCard from "../../components/MemeCard";
import Header from "../../components/Header";

const memesData = [
  {
    id: 1,
    title: "AI Takeover",
    url: "https://i.redd.it/8pz48gxuz13f1.jpeg",
    category: "Programming",
    tags: ["coding", "developer", "struggles"],
  },
  {
    id: 2,
    title: "Programming Logic",
    url: "https://i.redd.it/lsuhc6aez62f1.png",
    category: "Programming",
    tags: ["logic", "debugging", "confusion"],
  },
  {
    id: 3,
    title: "Chad StackOverflow",
    url: "https://i.redd.it/aa86o2h1iy1f1.png",
    category: "Programming",
    tags: ["code-review", "Stack-overflow", "teamwork"],
  },
  {
    id: 4,
    title: "Pain",
    url: "https://i.redd.it/ni9cgj37vpde1.jpeg",
    category: "Programming",
    tags: ["success", "coding", "celebration"],
  },
  {
    id: 5,
    title: "Evolution",
    url: "https://i.redd.it/t97mokatofqe1.jpeg",
    category: "Developer Life",
    tags: ["mood", "emotions", "programming"],
  },
  {
    id: 6,
    title: "",
    url: "https://i.redd.it/vfjc18xx5b7f1.jpeg",
    category: "Programming",
    tags: ["Bugs", "help", "dependency"],
  },
  {
    id: 7,
    title: "Bug vs Feature",
    url: "https://i.redd.it/qd5fc70cu77f1.jpeg",
    category: "Programming",
    tags: ["bugs", "features", "development"],
  },
  {
    id: 8,
    title: "",
    url: "https://i.redd.it/r0ou6n8bx27f1.jpeg",
    category: "Programming",
    tags: ["Bugs", "Errors", "comparison"],
  },
  {
    id: 9,
    title: "",
    url: "https://i.redd.it/emtyiriewz6e1.png",
    category: "Pirates",
    tags: ["", "", "interview"],
  },
  {
    id: 10,
    title: "Onedrive",
    url: "https://i.redd.it/932apyp1dy1f1.jpeg",
    category: "Computers",
    tags: ["One-Drive", "Microsoft", "dwight"],
  },
];

const MemePage = () => {
  return (
    <div className="min-h-screen bg-black text-white meme-page">
      <Header />

      
      <div className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Meme Collection
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A curated collection of programming memes, office humor, and
              relatable content
            </p>
          </div>

       
          <div className="masonry-container columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
            {memesData.map((meme) => (
              <div key={meme.id} className="masonry-item">
                <MemeCard meme={meme} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemePage;
