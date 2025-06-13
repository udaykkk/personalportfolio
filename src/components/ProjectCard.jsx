import React from 'react'

function ProjectCard({ image, title, description, icons }) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[-8px_8px_15px_rgba(239,68,68,0.3),_8px_8px_15px_rgba(239,68,68,0.3)] cursor-pointer max-w-sm">
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-red-500 text-2xl font-bold mb-3 font-[Bebas_Neue]">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Icons/Technologies Section */}
        <div className="flex flex-wrap gap-3">
          {icons && icons.map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-zinc-700 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-red-500"
            >
              <div className="text-white text-lg">
                {tech.icon}
              </div>
              <span className="text-white text-sm font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard