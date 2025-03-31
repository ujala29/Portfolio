
import React from 'react';
import { BookOpen } from 'lucide-react';
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: {
    title: string;
    description?: string;
    grade?: string;
  };
  darkMode: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, darkMode }) => {
  return (
    <div className={cn(
      "p-3 rounded-lg flex gap-3 items-center card-hover",
      darkMode 
        ? "bg-gray-800 border border-gray-700" 
        : "bg-white shadow-lg"
    )}>
      <div className={cn(
        "p-2 rounded-full",
        darkMode ? "bg-indigo-900/30" : "bg-indigo-100"
      )}>
        <BookOpen size={20} className={darkMode ? "text-indigo-300" : "text-indigo-600"} />
      </div>
      <div>
        <h4 className="text-md font-semibold">
          {course.title}
          {course.grade && (
            <span className={cn(
              "ml-2 text-xs px-2 py-0.5 rounded",
              darkMode 
                ? "bg-indigo-900/50 text-indigo-300" 
                : "bg-indigo-100 text-indigo-700"
            )}>
              {course.grade}
            </span>
          )}
        </h4>
        {course.description && (
          <p className={cn(
            "text-xs",
            darkMode ? "text-gray-400" : "text-gray-500"
          )}>
            {course.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
