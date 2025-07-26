import React from "react";
import SkillCard from "../../components/SkillCard";
import Header from "../../components/Header";
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb, DiMysql } from "react-icons/di";
import { SiMysql, SiGooglecloud } from "react-icons/si";
import { FaC } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";

function Skills() {
  const skillsDataBack = [
    {
      id: 1,
      icon: <FaNodeJs />,
      title: "Node.js",
      description: "Backend development",
    },
    {
      id: 2,
      icon: <IoLogoFirebase />,
      title: "Firebase",
      description: "Backend Development",
    },
  ];

  const skillsDataFront = [
    {
      id: 1,
      icon: <FaHtml5 />,
      title: "HTML",
      description: "Web Markup",
    },
    {
      id: 2,
      icon: <FaCss3Alt />,
      title: "CSS",
      description: "Frontend Styling",
    },
    {
      id: 3,
      icon: <FaJs />,
      title: "JavaScript",
      description: "Scripting Language",
    },
    {
      id: 4,
      icon: <FaReact />,
      title: "React",
      description: "Frontend Framework",
    },
  ];

  const skillsData = [
    {
      id: 1,
      icon: <DiMongodb />,
      title: "Mongo DB",
      description: "Non-Relational Database",
    },
    {
      id: 2,
      icon: <SiMysql />,
      title: "MySQL",
      description: "Relational Database",
    },
  ];

  const skillsDataLang = [
    {
      id: 1,
      icon: <FaC />,
      title: "Java",
      description: "Coding Language",
    },
    {
      id: 2,
      icon: <FaPython />,
      title: "Python",
      description: "Coding Language",
    },
  ];

  const skillsDataOther = [
    {
      id: 1,
      icon: <FaDocker />,
      title: "Docker",
      description: "Container Management",
    },
    {
      id: 2,
      icon: <IoLogoVercel />,
      title: "Vercel",
      description: "Deployment Platform",
    },
    {
      id: 3,
      icon: <SiGooglecloud />,
      title: "GCR",
      description: "Google Cloud Run",
    },
  ];

  return (
    <div className="bg-[#141414] w-full min-h-screen">
      <Header />
      <div className="pt-20 flex justify-center items-center flex-col">
        <div className="w-full max-w-6xl px-4">
          {/* Frontend Section */}
          <div className="pt-2 flex justify-center items-center flex-col">
            <p className="text-white font-[Bebas_Neue] text-2xl p-4 underline decoration-red-700 underline-offset-4">
              Frontend
            </p>
            <div className="flex flex-wrap gap-8 p-4 w-full justify-center">
              {skillsDataFront.map((skill) => (
                <SkillCard
                  key={skill.id}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div className="pt-2 flex justify-center items-center flex-col">
            <p className="text-white font-[Bebas_Neue] text-2xl p-4 underline decoration-red-700 underline-offset-4">
              Backend
            </p>
            <div className="flex flex-wrap gap-8 p-4 w-full justify-center">
              {skillsDataBack.map((skill) => (
                <SkillCard
                  key={skill.id}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-center items-center flex-col">
            <p className="text-white font-[Bebas_Neue] text-2xl p-4 underline decoration-red-700 underline-offset-4">
              Database
            </p>
            <div className="flex flex-wrap gap-8 p-4 w-full justify-center">
              {skillsData.map((skill) => (
                <SkillCard
                  key={skill.id}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-center items-center flex-col">
            <p className="text-white font-[Bebas_Neue] text-2xl p-4 underline decoration-red-700 underline-offset-4">
              Other Languages
            </p>
            <div className="flex flex-wrap gap-8 p-4 w-full justify-center">
              {skillsDataLang.map((skill) => (
                <SkillCard
                  key={skill.id}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-center items-center flex-col">
            <p className="text-white font-[Bebas_Neue] text-2xl p-4 underline decoration-red-700 underline-offset-4">
              Other Tools
            </p>
            <div className="flex flex-wrap gap-8 p-4 w-full justify-center">
              {skillsDataOther.map((skill) => (
                <SkillCard
                  key={skill.id}
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
