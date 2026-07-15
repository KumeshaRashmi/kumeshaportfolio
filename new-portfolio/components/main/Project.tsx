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
        
        {/* --- Existing Projects --- */}
        <ProjectCard
          src="/SDVN.png"
          title="EDCF-Shield - Zero-Trust Security for SDVN"
          description="Designed a zero-trust, dual-mode security architecture for Vehicular Networks, featuring a Temporal Graph Neural Network (TGNN) for attack detection and a fine-tuned LLM with RAG for contextual threat reasoning."
          githubLink="https://github.com/Chanidu26/sdvn-control-flooding-attack-mitigation-fyp"
        />
        <ProjectCard
          src="/silence.png"
          title="SilenceBreaker - Multi-Agent AI Assistant"
          description="Co-developed a 4-agent AI system orchestrated with LangGraph to provide evidence-grounded support for abuse-related help-seeking, utilizing RAG retrieval via FAISS and a fine-tuned DistilBERT classifier."
          githubLink="https://github.com/KumeshaRashmi/SilenceBreaker"
        />
        <ProjectCard
          src="/sihaya.png"
          title="Sihaya - Cloud Native E-Commerce"
          description="Architected a 6-service cloud-native platform communicating via RabbitMQ and secured with a JWT API Gateway. Built a CI/CD pipeline with GitHub Actions to deploy containerized services to AWS EC2 via Kubernetes."
          githubLink="https://github.com/Chathzaa/eCommerce-Cloud"
        />
        <ProjectCard
          src="/hpc.png"
          title="High-Performance Convolution Engine"
          description="Spearheaded a distributed-memory high-performance computing project implementing hybrid MPI and OpenMP modules, along with a CUDA-based solution, achieving a 2x speedup for parallel Sobel edge detection."
          githubLink="https://github.com/GiharaNavindu/hpc-img-process-engine"
        />
        <ProjectCard
          src="/cinnamon.png"
          title="CinnamonVision - Automated Grading"
          description="Engineered a computer vision pipeline to grade Ceylon cinnamon quills. Extracted geometric, HSV color-space, and complex texture features to train highly accurate SVM and KNN machine learning classifiers."
          githubLink="https://github.com/KumeshaRashmi/CinnamonVision"
        />
        <ProjectCard
          src="/file.png"
          title="Secure File Transfer Protocol"
          description="Designed a zero-trust, end-to-end encrypted file sharing protocol using hybrid cryptography (RSA-2048, AES-256-GCM), RSA-PSS digital signatures, and HMAC-SHA256 to defend against MitM and replay attacks."
          githubLink="https://github.com/KumeshaRashmi/Secure-File-sharing-Protocol"
        />
        <ProjectCard
          src="/prog2.png"
          title="KumiAi - MERN AI Chatbot"
          description="Developed an AI chatbot application similar to ChatGPT using the MERN stack and TypeScript. Integrated OpenAI API for AI functionalities, with a MongoDB database, Express.js, and Node.js backend, delivering intelligent and responsive conversational experiences."
          githubLink="https://github.com/KumeshaRashmi/KumiAi-Bot"
        />
        <ProjectCard
          src="/proj45.png"
          title="Mobile Phone Price Predictor"
          description="Develop a model to predict mobile phone prices using Linear Regression and Random Forest Regression. Optimize accuracy through feature selection and hyperparameter tuning, and identify key features influencing prices."
          githubLink="https://github.com/KumeshaRashmi/Mobile-Phone-Price-Predictor"
        />
        <ProjectCard
          src="/proj7.png"
          title="Local Event Finder App"
          description="Built web and mobile apps to help users discover local events. Key features: QR codes, notifications, event filtering, and a recommendation system. Tools: Flutter, Firebase, Dart (mobile); MERN stack (web)."
          githubLink="https://github.com/KumeshaRashmi/LEF-Mobile"
        />
        
      </div>
    </div>
  );
};
export default Projects;
