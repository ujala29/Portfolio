
import React from 'react';
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    link?: string;
  };
  darkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, darkMode }) => {
  const cardContent = (
    <>
      <img 
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="p-4">
        <h4 className="text-lg font-bold mb-2">{project.title}</h4>
        <p className={cn(
          "text-sm",
          darkMode ? "text-gray-300" : "text-gray-600"
        )}>
          {project.description}
        </p>
      </div>
    </>
  );
  
  return (
    <div className={cn(
      "rounded-lg overflow-hidden card-hover",
      darkMode ? "bg-gray-800 border border-gray-700" : "bg-white shadow-lg"
    )}>
      {project.link ? (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block h-full"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </div>
  );
};

export default ProjectCard;
