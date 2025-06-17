import React from "react";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython } from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";

function Project() {
  const projectData = {
    iconsWeather: [
      { icon: <FaReact />, name: "React" },
      { icon: <RiTailwindCssFill />, name: "Tailwind" },
      { icon: <FaNode />, name: "Node.js" },
    ],
    iconsClassiFi: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaNode />, name: "Node.js" },
    ],
    iconsData: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      {icon : <FaJs />, name : "Javascript"}
    ],
    iconsEtch: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      {icon : <FaJs />, name : "Javascript"}
    ],
    iconsEdu: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaNode/>, name: "Node.js" },
      {icon : <AiOutlineOpenAI  />, name : "OpenAI"}
    ],
  };
  return (
    <div className="bg-[#141414] w-full min-h-screen ">
      <Header />
      <div className="pt-30 pl-4 flex gap-16 flex-wrap justify-center pb-8">
        <ProjectCard
        link={"https://weather-app-frontend-i64p.onrender.com/"}
          image={"https://i.ibb.co/zHbxvmBt/image.png"}
          title={"Weather-Pro"}
          description={
            "WeatherPro delivers accurate weather predictions and forecasts for any location worldwide. Built with React and powered by reliable weather APIs, this application offers an intuitive, responsive interface for accessing detailed weather information, news updates, and interactive features"
          }
          icons={projectData.iconsWeather}
        />
        <ProjectCard
        link={"https://github.com/ShadowGuy01234/Classifi.git"}
          image={"https://i.ibb.co/8Dmhy0WQ/1733405340830.jpg"}
          title={"ClassiFi"}
          description={
            "ClassiFi is an ML-powered document classification system designed to automate and streamline the organization of documents. Built using Node.js for the backend, Express.js for the server, and a customizable Python ML model, ClassiFi makes it easy to classify and organize large sets of documents across various industries."
          }
          icons={projectData.iconsClassiFi}
        />
        <ProjectCard
        link={"https://github.com/PushkarJaiswal06/Data-Matrix.git"}
          image={"https://i.ibb.co/0pLnmvgQ/image.png"}
          title={"Data-Matrix"}
          description={
            "Data-Matrix is a one-stop platform for discovering and exploring all things trending in pop culture. Whether it's movies, TV shows, songs, sports, games, or books, Data-Matrix provides a centralized hub where users can access curated information about the latest and most popular topics."
          }
          icons={projectData.iconsData}
        />
        <ProjectCard
        link={"https://shadowguy01234.github.io/Etch-a-Sketch"}
          image={"https://i.ibb.co/HDBvFMDQ/image.png"}
          title={"Etch a Sketch"}
          description={
            "A web-based drawing application inspired by the classic Etch-a-Sketch toy! This project allows users to draw on a customizable canvas using HTML, CSS, and JavaScript."
          }
          icons={projectData.iconsEtch}
        />
        <ProjectCard
        link={""}
          image={"https://i.ibb.co/MyqKhhjD/image.png"}
          title={"Edu-Vision"}
          description={
            "EduVision is an AI-based tool that helps teachers track student engagement and improve classroom interaction using smart insights from images and data.It empowers educators with real-time feedback to make learning more effective and interactive."
          }
          icons={projectData.iconsEdu}
        />
        <ProjectCard
        link={"https://shadowguy01234.github.io/JS-Calculator/"}
          image={"https://i.ibb.co/nNkSrm1d/image.png"}
          title={"Calculator"}
          description={
            "A simple and intuitive web-based calculator built using HTML, CSS, and JavaScript. This project provides basic arithmetic operations with a user-friendly interface."
          }
          icons={projectData.iconsEtch}
        />
        
      </div>
    </div>
  );
}

export default Project;
