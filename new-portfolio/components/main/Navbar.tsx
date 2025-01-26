"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component is fully mounted before rendering dynamic content
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid rendering until mounted

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] text-lg md:ml-[30px] text-gray-300">
            Kumesha
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact Me
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0300145e] backdrop-blur-md border border-[#7042f861] rounded-lg mt-2 py-4 px-6 text-gray-200">
          <a
            href="#about-me"
            className="cursor-pointer py-2 w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            About me
          </a>
          <a
            href="#skills"
            className="cursor-pointer py-2 w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="cursor-pointer py-2 w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="cursor-pointer py-2 w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Me
          </a>

          {/* Social Icons */}
          <div className="flex flex-row gap-5 mt-4">
            {Socials.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
