import React from "react";
import TimelineItem from "../../components/Timeline";
import Header from "../../components/Header";

function Professional() {
  const experiences = [
    {
      position: "🎓 First-Year B.Tech CSE Student",
      company: "MMMUT, Gorakhpur",
      duration: "Aug 2024 - Present",
      location: "📍Gorakhpur, India",
      role: "Student | Developer",
      technologies: "🔧 DSA, Web Development, Computer Architecture",
      achievements: [
        "Started the B.Tech journey in Computer Science and Engineering at MMMUT.",
        "Focused on building strong fundamentals in DSA, Web Development, and Computer Architecture.",
        "Participated in hackathons, coding events, and university-level workshops to enhance technical and collaborative skills.",
      ],
      isLeft: true,
    },
    {
      position: "🏆 Top 5 Finalist - IIT Bombay Techfest Hackathon",
      company: "Structify AI - Team Lead, ML Engineer & Backend Developer",
      duration: "Dec 2024",
      location: "📍Final Round, Mumbai (Finalist)",
      technologies: "🔧 Node.js, Express, SVM, HTML/CSS/JS",
      achievements: [
        "Built Structify AI, a document classification platform designed to automate labeling and organization tasks.",
        "Designed a self-bootstrapping system using a custom SVM-based ML model — fully offline and API-independent.",
        "Led a 4-member team, handling backend development in Node.js and Express, with a minimal HTML/CSS/JS frontend.",
        "Architected a clean pipeline to process structured text, reducing manual sorting time by 90%.",
        "Ranked in the Top 5 out of 1000+ teams at India's largest national-level hackathon at IIT Bombay.",
      ],
      isLeft: false,
    },
    {
      position: "🔵 Tech Member - RESO Society, MMMUT",
      company: "Web Developer",
      duration: "Mar 2025 - Present",
      location: "📍Gorakhpur, India",
      technologies: "🔧 React, JavaScript, Frontend Development",
      achievements: [
        "Contributed to mmmut.xyz and Samagra app, focusing on React-based frontend enhancements.",
        "Initiated features like flashcard generation, and resource compilation for academic support.",
        "Actively involved in ideation and prototyping of AI-integrated tools for campus utilities.",
      ],
      isLeft: true,
    },
    {
      position: "📝 Editorial Board - MMMUT",
      company: "Writer & Content Contributor",
      duration: "May 2025 - Present",
      location: "📍MMMUT Campus",
      technologies: "🔧 Content Writing, Technical Writing, Editorial Work",
      achievements: [
        "Selected for the university's editorial board based on writing and creative aptitude.",
        "Contributed articles and reports for technical and cultural events conducted at MMMUT.",
        "Assisted in curating content for university newsletters and public-facing communication.",
      ],
      isLeft: false,
    },
  ];
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          Professional Experience
        </h1>

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              position={experience.position}
              company={experience.company}
              duration={experience.duration}
              location={experience.location}
              role={experience.role}
              technologies={experience.technologies}
              achievements={experience.achievements}
              isLeft={experience.isLeft}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Professional;
