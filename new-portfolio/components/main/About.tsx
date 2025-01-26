"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div  id="about-me" className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-gray-200 px-4 md:px-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="text-center mt-10 mb-10"
      >
        <h1 className="text-5xl md:text-[80px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          About Me
        </h1>
        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          I am Kumesha Rashmi, an undergraduate Computer Engineering student at the University of Ruhuna, Faculty of Engineering. I am passionate about exploring various fields within computer engineering, including web development, mobile app development, and machine learning.
          <br />
          <br />
          Currently, I am learning DevOps, networking, AI, and embedded system design while actively working on projects to gain hands-on experience. My technical expertise includes front-end technologies like React, MUI, and Tailwind; back-end frameworks such as Node.js and Express; and mobile development using Flutter/Dart. Additionally, I have a solid foundation in data structures, algorithms, and software engineering principles.
          <br />
          <br />
          I am seeking a software developer internship to apply my skills, gain practical experience, and contribute to impactful solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Certificates Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
        >
          <Image src="/cer.png" alt="Certificate" width={100} height={100} className="mb-4" />
          <h3 className="text-lg font-bold mb-4">Certificates</h3>
          <ul className="text-gray-400 list-disc list-inside space-y-2">
            <li>
              <a
                href="https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
              >
                Python Course
              </a>{" "}
              (University of Moratuwa).
            </li>
            <li>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/CDLAGGZH0IWU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
              >
                Supervised Machine Learning
              </a>{" "}
              (Coursera).
            </li>
            <li>
              <a
                href="https://certificate.hack2skill.com/user/aibuilderslab2/2024H2S10AIBL-P200541"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
              >
                AI Builders Lab Bootcamp
              </a>{" "}
              (Google for Developers).
            </li>
            <li>
              <a
                href="https://www.udemy.com/certificate/UC-XYZ123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
              >
                Python Data Analytics Real-World Projects
              </a>{" "}
              (Udemy).
            </li>
            <li>
              <a
                href="https://www.hackerrank.com/certificates/8ef3a7c9f27f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
              >
              CSS Basic Certificate
              </a>{" "}
              (Hackerrank).
            </li>
            <li>
            <a
                href="https://www.hackerrank.com/certificates/0b366be73bf6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
              >
              SQL Basic Certificate
              </a>{" "}
              (Hackerrank).
            </li>
            <li>
            <a
              href="https://www.simplilearn.com/free-mern-stack-program-skillup?utm_source=shared-certificate&utm_medium=shared-course&utm_campaign=shared-certificate-course-promotion"
              target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
                >
            MERN Stack Course
              </a>{" "}
              (Simplilearn).
            </li>
            <li>
            <a
              href="https://www.mygreatlearning.com/certificate/ZZDUUQBO"
              target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
                >
              Advanced UI/UX for Beginners
              </a>{" "}
              (Great Learning Academy).
            </li>
            <li>
            <a
              href="https://www.mygreatlearning.com/academy/learn-for-free/courses/flutter-for-beginners"
              target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
                >
                Flutter for Beginners
              </a>{" "}
              (Great Learning Academy).
            </li>
          </ul>
        </motion.div>

        {/* Competitions Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
        >
          <Image src="/code.png" alt="Competition" width={100} height={100} className="mb-4" />
          <h3 className="text-lg font-bold mb-4">Competitions</h3>
          <ul className="text-gray-400 list-disc list-inside space-y-2">
            <li>
            Participated <span className="text-purple-500">Hackholics 6.0</span> selected as top ten finalists organized by <span className="text-purple-500">IEEE WIE student branch UCSC</span>.
            </li>
            <li>
            Participated in <span className="text-purple-500">Innovate with Ballerina</span> competition organized by <span className="text-purple-500">IEEE student branch University of Moratuwa in collobaration with WSO2 </span>in there we created Decentralized voting platform web application backend supporting by ballerina and frontend used react with tailwind css and vite.
            </li>
            <li>
            Participated in  <span className="text-purple-500">Xtream Encode</span>, organized by <span className="text-purple-500">ENCIDE MACE in collaboration with IEEEXtreme 18.0 (Region 10)</span>.
            </li>
            <li>
            Participated in <span className="text-purple-500">eminence 4.0</span> organized by <span className="text-purple-500">IEEE WIE Ruhuna student branch </span>in there we created microcontroller based car parking system.
            </li>
            <li>Participated in <span className="text-purple-500">Codesprint 8</span> organized by <span className="text-purple-500">IEEE student branch IIT</span> .
            </li>
          </ul>
        </motion.div>

        {/* Extracurricular Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
        >
          <Image src="/comu.png" alt="Extracurricular" width={100} height={100} className="mb-4" />
          <h3 className="text-lg font-bold mb-4">Extracurriculars</h3>
          <ul className="text-gray-400 list-disc list-inside space-y-2">
            <li> <span className="text-purple-500">IEEEXtreme 18.0 Proctor Program </span> Sub-Committee general team member.</li>
            <li>OC member of the registration team for  <span className="text-purple-500">Ad Astra 1.0-half night camp</span> organized by faculty of Engineering University of Ruhuna.</li>
            <li> <span className="text-purple-500">SEDS Ruhuna</span> Education Team Member.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;





