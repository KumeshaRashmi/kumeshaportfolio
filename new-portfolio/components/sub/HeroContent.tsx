"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const HeroContent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownloadClick = () => {
    alert("Redirecting to download the CV...");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20] space-y-10 md:space-y-0"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center md:text-start">
        {/* Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-4xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px]"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {isMounted && (
                <Typewriter
                  words={["Kumesha Rashmi"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              )}
            </span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-gray-400 my-5 max-w-full md:max-w-[600px]"
        >
          a passionate Computer Engineering undergraduate at the University of
          Ruhuna, Faculty of Engineering. I am driven by a deep curiosity to
          explore and embrace new technologies, continuously learning and
          expanding my skills to stay ahead in this fast-evolving field.
        </motion.p>

        {/* Download Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://drive.google.com/file/d/1JEwUNdN6e4yF82at4Ea-NjZfEhnIo8qi/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadClick}
          className="py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-center text-white font-medium cursor-pointer rounded-lg max-w-[200px] text-xs md:text-sm hover:opacity-90 transition-opacity duration-200"
        >
          Download My CV
        </motion.a>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
    <Image
  src="/kum8.png"
  alt="work icons"
  priority
  width={350}
  height={350}
  sizes="(max-width: 768px) 200px, 350px"
  className="rounded-full"
/>

      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
