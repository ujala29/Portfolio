
import React from 'react';
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  darkMode: boolean;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, darkMode }) => (
  <span 
    className={cn(
      "px-3 py-1 rounded-full text-sm badge-glow",
      darkMode 
        ? "bg-gray-700 text-indigo-300 hover:bg-gray-600" 
        : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
    )}
  >
    {skill}
  </span>
);

export default SkillBadge;
