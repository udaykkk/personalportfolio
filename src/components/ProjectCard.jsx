import React from "react";

function ProjectCard({ image, title, description, icons, link}) {
  return (
    
    <div className="bg-zinc-900 rounded-lg overflow-hidden h-[440px] flex flex-col transition-all duration-300 shadow-[0_0_8px_rgba(84,14,18,1)] hover:scale-103 hover:shadow-[-8px_8px_15px_rgba(239,68,68,0.1),_8px_8px_15px_rgba(239,68,68,0.2)]  cursor-pointer max-w-sm">
      <a href={link} target="_blank">
      <div className="w-full h-48 overflow-hidden flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="h-0.5 w-full bg-red-500 flex-shrink-0"></div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-red-500 text-xl mb-1 font-[Bebas_Neue]">{title}</h3>

        <p className="text-gray-300 text-xs leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mt-auto">
          {icons &&
            icons.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-zinc-700 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-red-500"
              >
                <div className="text-white text-lg">{tech.icon}</div>
                <span className="text-white text-sm font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
        </div>
      </div>
      </a>
    </div>
  );
}

export default ProjectCard;
