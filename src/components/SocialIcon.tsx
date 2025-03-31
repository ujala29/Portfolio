
import React from 'react';
import { cn } from "@/lib/utils";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  darkMode: boolean;
  label?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, darkMode, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "p-2 rounded-full transition-colors flex items-center gap-2",
      darkMode ? "hover:bg-gray-700 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-700 hover:text-portfolio-primary"
    )}
    aria-label={label || "Social media link"}
  >
    {icon}
    {label && <span className="text-sm">{label}</span>}
  </a>
);

export default SocialIcon;
