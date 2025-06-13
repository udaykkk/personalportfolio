import React from "react";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

function Project() {
  const projectData = {
    image: "path/to/your/image.jpg",
    title: "All Meno",
    description:
      "This is my personal project where I have built a website for all restaurants in and around my undergrad college. This website is built using pure HTML and JavaScript.",
    icons: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
    ],
  };
  return (
    <div className="bg-[#141414] w-full min-h-screen">
      <Header />
      <div className="m-30">
        <ProjectCard
          image={projectData.image}
          title={projectData.title}
          description={projectData.description}
          icons={projectData.icons}
        />
      </div>
    </div>
  );
}

export default Project;
