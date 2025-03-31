
import React from 'react';
import { Trophy } from 'lucide-react';
import { cn } from "@/lib/utils";

interface AchievementCardProps {
  achievement: {
    title: string;
    description: string;
    date?: string;
    link?: string;
  };
  darkMode: boolean;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, darkMode }) => {
  return (
    <div className={cn(
      "p-4 rounded-lg flex gap-4 items-start card-hover",
      darkMode 
        ? "bg-gray-800 border border-gray-700" 
        : "bg-white shadow-lg"
    )}>
      <div className={cn(
        "p-2 rounded-full",
        darkMode ? "bg-indigo-900/30" : "bg-indigo-100"
      )}>
        <Trophy size={24} className={darkMode ? "text-indigo-300" : "text-indigo-600"} />
      </div>
      <div>
        <h4 className="text-lg font-bold mb-1">
          {achievement.link ? (
            <a 
              href={achievement.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "hover:underline",
                darkMode ? "text-indigo-300" : "text-indigo-600"
              )}
            >
              {achievement.title}
            </a>
          ) : (
            achievement.title
          )}
        </h4>
        {achievement.date && (
          <p className={cn(
            "text-xs mb-2",
            darkMode ? "text-gray-400" : "text-gray-500"
          )}>
            {achievement.date}
          </p>
        )}
        <p className={cn(
          "text-sm",
          darkMode ? "text-gray-300" : "text-gray-600"
        )}>
          {achievement.description}
        </p>
      </div>
    </div>
  );
};

export default AchievementCard;
