import React from "react";
import { RxDiscordLogo, RxGithubLogo ,RxLinkedinLogo } from "react-icons/rx";
//import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social</div>
            
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a href="https://github.com/KumeshaRashmi" target="_blank" rel="noopener noreferrer" className="text-[15px] ml-[6px]">GitHub</a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a href="https://www.linkedin.com/in/kumesha-rashmi-001976242/" target="_blank" rel="noopener noreferrer" className="text-[15px] ml-[6px]">LinkedIn</a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <a href="https://medium.com/@kumesharashmi918" target="_blank" rel="noopener noreferrer" className="text-[15px] ml-[6px]">Medium</a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Education</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Bsc.Computer Engineering Undergraduate ,
                Univeristy Of Ruhuna, Faculty of Engineering(2022-2027) </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Sri Sumangala Girls School Panadura(2006-2019)</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Kumesharashmi918@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Developed by Kumesha Rashmi 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;