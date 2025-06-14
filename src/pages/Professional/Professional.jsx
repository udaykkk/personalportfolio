import React from "react";
import TimelineItem from "../../components/Timeline";
import Header from "../../components/Header";

function Professional() {
  const experiences = [
    {
      position: "Software Developer - I 🎯",
      company: "eKincare India",
      duration: "Jul 2020 - Nov 2021",
      technologies: "🔧 React, Context API, Twilio, Razorpay, AWS",
      achievements: [
        "🎯 Developed chat and video consultation features for patient engagement.",
        "Built an analytics dashboard, improving data insights for medical professionals.",
        "Optimized Lighthouse score, boosting application performance.",
      ],
      isLeft: true,
    },
    {
      position: "Mid-Level Software Developer 🎯",
      company: "Kajima London",
      duration: "Jun 2023 - Present",
      technologies: "🔧 Ruby on Rails, React, Node.js, AWS, PostgreSQL",
      achievements: [
        "🎯 Led NHSPS Open Space Website development for a seamless user experience.",
        "Enhanced QA processes, reducing bug rate by 20%.",
        "Optimized system performance for 10,000+ users and 50 million bookings.",
      ],
      isLeft: false,
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">
          Professional Experience
        </h1>

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              position={experience.position}
              company={experience.company}
              duration={experience.duration}
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
