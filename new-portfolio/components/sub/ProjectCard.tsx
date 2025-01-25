import Image from "next/image";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
}

const ProjectCard = ({ src, title, description, githubLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] min-w-[250px] transition-transform duration-300 ease-in-out transform hover:scale-105">
      <Image
        src={src}
        alt={title}
        width={400} // Specify the width
        height={300} // Specify the height
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center mt-2 text-purple-500 hover:underline">
          <RxGithubLogo className="mr-2" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;