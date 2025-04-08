
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, FileText, Mail, Award, Code, BookOpen } from 'lucide-react';
import SocialIcon from '../components/SocialIcon';
import InfoCard from '../components/InfoCard';
import SkillBadge from '../components/SkillBadge';
import ProjectCard from '../components/ProjectCard';
import AchievementCard from '../components/AchievementCard';
import CourseCard from '../components/CourseCard';
import { cn } from '@/lib/utils';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if user prefers dark mode
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Tailwind CSS',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      link: 'https://github.com/ujala29/portfolio'
    },
    {
      title: 'Virtual Keyboard with Hand Gesture Recognition',
      description: 'An interactive virtual keyboard using OpenCV, MediaPipe, and computer vision, enabling text input through hand gestures for accessibility and ease of use.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      link: 'https://github.com/ujala29/Virtual-keyboard'
    },
    { title: 'Netflix Clone',
      description: 'A responsive Netflix Clone frontend built using HTML and CSS, featuring an intuitive UI and movie browsing experience.',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=300&fit=crop',
      link: 'https://github.com/ujala29/netflixclonebyaanya'
    },
    {
      title: 'Movie Recommendation System',
      description: 'An intelligent movie recommendation system built using machine learning in Python. It analyzes user preferences and suggests relevant movies.',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=300&fit=crop',
      link: 'https://github.com/ujala29/Movie-Recommender-using-ML'
    }
    
  ];

  const achievements = [
    {
      title: 'Runner-up in HackMOL 5.0',
      description: 'Secured second place in HackMOL 6.0 hackathon with an innovative project on sustainable energy solutions.',
      date: 'March 2024',
      link: 'https://github.com/ujala29/krishi_frontend'
    },
    {
      title: 'Participated in Inter-IIT Fashion Show',
      description: 'Represented my college in the Inter-IIT cultural meet fashion show, showcasing artistic creativity and teamwork.',
      date: 'February 2024'
    },
    {
      title: 'LeetCode 250+ Questions Solved',
      description: 'Solved over 250 coding challenges on LeetCode, demonstrating strong problem-solving and algorithm skills.',
      link: 'https://leetcode.com/u/ujala_gupta/'
    },
    {
      title: 'GeeksforGeeks 150+ Questions Solved',
      description: 'Completed 150+ programming problems on GeeksforGeeks across various topics including DSA, competitive programming, and more.',
      link: 'https://www.geeksforgeeks.org/user/ujalagiszc/'
    }
  ];

  const skills = [
    'React', 'Machine learning', 'Node.js', 'Python', 'SQL', 'Git',
    'JavaScript', 'HTML/CSS', 'MongoDB', 'Express', 'C++', 'Java',
    'DSA', 'Problem Solving', 'Communication'
  ];

  const courses = [
    { title: 'Object-Oriented Programming', grade: 'A' },
    { title: 'Database Management Systems', grade: 'A+' },
    { title: 'Computer Networks', grade: 'A' },
    { title: 'Data Structures & Algorithms', grade: 'A+' },
    { title: 'Operating Systems', grade: 'A' },
    { title: 'Web Development', grade: 'A+' },
    { title: 'Machine Learning', grade: 'A' },
    { title: 'Software Engineering', grade: 'A' }
  ];

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300",
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    )}>
      {/* Navigation */}
      <nav className={cn(
        "fixed w-full transition-all duration-300 z-50",
        darkMode 
          ? scrolled ? 'bg-gray-800/90 backdrop-blur-sm shadow-md' : 'bg-gray-800' 
          : scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-white'
      )}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Ujala Gupta</h1>
          <div className="flex items-center gap-4">
            <a href="#about" className={cn(
              "hidden sm:block px-3 py-2 rounded-md transition-colors",
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            )}>About</a>
            <a href="#skills" className={cn(
              "hidden sm:block px-3 py-2 rounded-md transition-colors",
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            )}>Skills</a>
            <a href="#achievements" className={cn(
              "hidden sm:block px-3 py-2 rounded-md transition-colors",
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            )}>Achievements</a>
            <a href="#projects" className={cn(
              "hidden sm:block px-3 py-2 rounded-md transition-colors",
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            )}>Projects</a>
            <button 
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-colors",
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              )}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Hero Section */}
        <section className="text-center mb-16 section-fade-in">
          <div className="relative inline-block">
            <img 
              src="pic1.jpg" // Replace with your image URL
              alt="Ujala Gupta"
              className={cn(
                "w-32 h-32 rounded-full mx-auto mb-4 object-cover transition-all duration-300",
                darkMode 
                  ? "border-4 border-indigo-500/70 shadow-lg shadow-indigo-500/20" 
                  : "border-4 border-indigo-500 shadow-lg shadow-indigo-500/40"
              )}
            />
            <div className={cn(
              "absolute -bottom-2 -right-2 p-1.5 rounded-full", 
              darkMode ? "bg-gray-800" : "bg-gray-50"
            )}>
              <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Ujala Gupta</h2>
          <p className={cn(
            "text-lg mb-6",
            darkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            CSE Student & Full Stack Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <SocialIcon 
              href="https://www.linkedin.com/in/ujala-gupta-948815258" 
              icon={<Linkedin size={20} />}
              darkMode={darkMode}
              label="LinkedIn"
            />
            <SocialIcon 
              href="https://github.com/ujala29" 
              icon={<Github size={20} />}
              darkMode={darkMode}
              label="GitHub"
            />
            <SocialIcon 
              href="https://leetcode.com/u/ujala_gupta/" 
              icon={<Code size={20} />}
              darkMode={darkMode}
              label="LeetCode"
            />
            <SocialIcon 
              href="https://drive.google.com/file/d/1u29nSKlAXj6i3dSO35al6rAtBRUmfdVB/view?usp=drivesdk" 
              icon={<FileText size={20} />}
              darkMode={darkMode}
              label="Resume"
            />
            <SocialIcon 
              href="mailto:ujala.gupta@example.com" 
              icon={<Mail size={20} />}
              darkMode={darkMode}
              label="Email"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 scroll-mt-20 section-fade-in">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className={cn(
              "p-1.5 rounded-md mr-2",
              darkMode ? "bg-indigo-900/30" : "bg-indigo-100"
            )}>
              <BookOpen size={20} className={darkMode ? "text-indigo-300" : "text-indigo-600"} />
            </span>
            About Me
          </h3>
          <div className={cn(
            "p-6 rounded-lg",
            darkMode ? "bg-gray-800 border border-gray-700" : "bg-white shadow-lg"
          )}>
            <p className={cn(
              "text-lg leading-relaxed",
              darkMode ? 'text-gray-300' : 'text-gray-600'
            )}>
              I am a passionate Computer Science and Engineering student with a strong foundation in programming 
              and a keen interest in web development, algorithms, and problem-solving. My journey in tech is driven 
              by a desire to create meaningful solutions that make a difference.
            </p>
            <p className={cn(
              "text-lg leading-relaxed mt-4",
              darkMode ? 'text-gray-300' : 'text-gray-600'
            )}>
              I have solved over 250+ problems on LeetCode and 150+ problems on GeeksforGeeks, demonstrating 
              my commitment to continuously improving my programming skills. I enjoy building full-stack applications
              and I'm always eager to learn new technologies and frameworks.
            </p>
            <p className={cn(
              "text-lg leading-relaxed mt-4",
              darkMode ? 'text-gray-300' : 'text-gray-600'
            )}>
              Outside of coding, I participate in hackathons, fashion shows, and other collaborative 
              activities that allow me to express creativity while developing strong communication and teamwork skills.
            </p>
          </div>
        </section>

        {/* Skills & Courses Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 section-fade-in">
          {/* Skills */}
          <div id="skills" className="scroll-mt-20">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className={cn(
                "p-1.5 rounded-md mr-2",
                darkMode ? "bg-indigo-900/30" : "bg-indigo-100"
              )}>
                <Code size={20} className={darkMode ? "text-indigo-300" : "text-indigo-600"} />
              </span>
              Skills
            </h3>
            <InfoCard 
              title="Technical & Soft Skills" 
              darkMode={darkMode}
            >
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} darkMode={darkMode} />
                ))}
              </div>
            </InfoCard>
          </div>

          {/* Courses */}
          <div id="courses" className="scroll-mt-20">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className={cn(
                "p-1.5 rounded-md mr-2",
                darkMode ? "bg-indigo-900/30" : "bg-indigo-100"
              )}>
                <BookOpen size={20} className={darkMode ? "text-indigo-300" : "text-indigo-600"} />
              </span>
              Courses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {courses.map((course, index) => (
                <CourseCard key={index} course={course} darkMode={darkMode} />
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-16 scroll-mt-20 section-fade-in">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className={cn(
              "p-1.5 rounded-md mr-2",
              darkMode ? "bg-indigo-900/30" : "bg-indigo-100"
            )}>
              <Award size={20} className={darkMode ? "text-indigo-300" : "text-indigo-600"} />
            </span>
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <AchievementCard 
                key={index}
                achievement={achievement}
                darkMode={darkMode}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20 section-fade-in">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className={cn(
              "p-1.5 rounded-md mr-2",
              darkMode ? "bg-indigo-900/30" : "bg-indigo-100"
            )}>
              <Github size={20} className={darkMode ? "text-indigo-300" : "text-indigo-600"} />
            </span>
            Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                project={project}
                darkMode={darkMode}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={cn(
        "py-6 border-t",
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'
      )}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <SocialIcon 
              href="https://www.linkedin.com/in/ujala-gupta-948815258" 
              icon={<Linkedin size={18} />}
              darkMode={darkMode}
            />
            <SocialIcon 
              href="https://github.com/ujala29" 
              icon={<Github size={18} />}
              darkMode={darkMode}
            />
            <SocialIcon 
              href="mailto:ujala.gupta@example.com" 
              icon={<Mail size={18} />}
              darkMode={darkMode}
            />
          </div>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} Ujala Gupta. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
