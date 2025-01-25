import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 shadow-lg p-8">
      <div className="max-w-[1200px] mx-auto flex bg-gray-900 flex-wrap justify-center gap-8">
        {/* Social Section */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center">
          <h3 className="font-bold text-lg mb-4">Social</h3>
          <ul className="space-y-3 text-center">
            <li className="flex items-center justify-center">
              <RxGithubLogo className="text-xl mr-2" />
              <a
                href="https://github.com/KumeshaRashmi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center justify-center">
              <RxLinkedinLogo className="text-xl mr-2" />
              <a
                href="https://www.linkedin.com/in/kumesha-rashmi-001976242/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center justify-center">
              <RxDiscordLogo className="text-xl mr-2" />
              <a
                href="https://medium.com/@kumesharashmi918"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                Medium
              </a>
            </li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center">
          <h3 className="font-bold text-lg mb-4">Education</h3>
          <ul className="space-y-3 text-center">
            <li className="text-sm leading-6">
              B.Sc. Computer Engineering Undergraduate,
              <br />
              University of Ruhuna, Faculty of Engineering (2022-2027)
            </li>
            <li className="text-sm leading-6">
              Sri Sumangala Girls School Panadura (2006-2019)
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center">
          <h3 className="font-bold text-lg mb-4">About</h3>
          <ul className="space-y-3 text-center">
            <li className="text-sm leading-6">Kumesharashmi918@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2025 Developed by Kumesha Rashmi Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
