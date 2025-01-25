"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[80px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        <ProjectCard
          src="/port.png"
          title="My portfolio web site"
          description="A modern portfolio website built with Next.js 13, leveraging TypeScript for type safety, Framer Motion for smooth animations, and Three.js for interactive 3D visuals. This project showcases my skills, projects, and experiences, emphasizing performance, interactivity, and responsive design."
          githubLink="https://github.com/KumeshaRashmi/kumeshaportfolio"
        />
        <ProjectCard
          src="/prog2.png"
          title="KumiAi-chatbot- mern AI chatbot"
          description="Developed an AI chatbot application similar to ChatGPT using the MERN stack and TypeScript. Integrated OpenAI API for AI functionalities, with a MongoDB database, Express.js, and Node.js backend, delivering intelligent and responsive conversational experiences."
          githubLink="https://github.com/KumeshaRashmi/KumiAi-Bot"
        />
        <ProjectCard
          src="/proj45.png"
          title="Mobile Phone Price Predictor using Machine Learning"
          description="Develop a model to predict mobile phone prices using Linear Regression and Random Forest Regression. Optimize accuracy through feature selection and hyperparameter tuning, and identify key features influencing prices."
          githubLink="https://github.com/KumeshaRashmi/Mobile-Phone-Price-Predictor"
        />
        <ProjectCard
          src="/proj5.png"
          title="MenuMate-Food Ordering Mobile App"
          description="A Flutter-based food ordering app with Firebase, offering user authentication, menu browsing, order placement for Android."
          githubLink="https://github.com/KumeshaRashmi/MenuMate_Mobile_App"
        />
        <ProjectCard
          src="/proj6.png"
          title="BudgetBolt Finance tracker website"
          description="BudgetBolt is a sleek finance tracker website built with HTML, CSS, and JavaScript. It helps users manage expenses, track budgets, and visualize spending trends with a user-friendly interface."
          githubLink="https://github.com/KumeshaRashmi/Budgetbolt.com"
        />
         <ProjectCard
          src="/proj7.png"
          title="Local Event Finder Mobile and Web App"
          description="Built web and mobile apps to help users discover local events. Key features: QR codes, notifications, event filtering, and a recommendation system. Tools: Flutter, Firebase, Dart (mobile); MERN stack (web)."
          githubLink="https://github.com/KumeshaRashmi/LEF-Mobile"
        />
        <ProjectCard
          src="/proj8.png"
          title="Decentralized Voting Platform"
          description="A decentralized voting platform that ensures secure, transparent, and tamper-proof elections.Backend: Powered by the Ballerina programming language from WSO2 for seamless integration and reliability.Frontend: Built with React, TailwindCSS, and Vite for a fast and responsive user experience."
          githubLink="https://github.com/KumeshaRashmi/iwb059-datadevils"
        />
        {/* Add more ProjectCard components as needed */}
      </div>
    </div>
  );
};

export default Projects;
