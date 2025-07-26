import React from "react";
import TimelineItem from "../../components/Timeline";
import Header from "../../components/Header";

function Professional() {
  const experiences = [
    {
      position: "🎓 Final Year Student B.Tech CSE Data Science Student",
      company: "SIET Nagole",
      duration: "Sept 2021 - Present",
      location: "📍Hyderabad, India",
      role: "Student | Developer",
      technologies: "🔧 DSA, Web Development, Computer Architecture",
      achievements: [
        "Started the B.Tech journey in Computer Science  DS and Engineering at SIET.",
        "Focused on building strong fundamentals in DSA, Web Development, and Computer Architecture.",
        "Participated in hackathons, coding events, and university-level workshops to enhance technical and collaborative skills.",
      ],
      isLeft: true,
    },
    {
      position: "🏆 Full Stack Developer Intern",
      company: "IPAGE UM SERVICES PVT LTD ",
      duration: "Oct 2024 to Dec 2024",
      location: "📍Gachibowli Hyderabad",
      technologies: "🔧  HTML/CSS/JS",
      achievements: [
        "Designed and developed an inventory management system for drone inventory, improving tracking efficiency by 30%.• Built responsive user interfaces using HTML, CSS, and JavaScript and SQL for a seamless user experience.",
        
      ],
      isLeft: false,
    },
    {
      position: "Outlier AI",
      company: "Freelane AI Trainer ",
      duration: "Aug 2024 - Present",
      location: "📍Remote",
      technologies: "🔧 Python, Ml,LLM",
      achievements: [
        "Trained AI models by analyzing and curating structured responses, increasing model accuracy by 25%.Provided detailed feedback on AI-generated outputs, refining algorithms for enhanced performance.Collaborated with teams to ensure high-quality AI datasets for machine learning projects.",
        
      ],
      isLeft: true,
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
