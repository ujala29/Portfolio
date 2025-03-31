
import React from 'react';
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  darkMode: boolean;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, darkMode, className }) => (
  <div className={cn(
    "p-6 rounded-lg transition-all duration-300 card-hover",
    darkMode ? "bg-gray-800 border border-gray-700" : "bg-white shadow-lg",
    className
  )}>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    {children}
  </div>
);

export default InfoCard;
