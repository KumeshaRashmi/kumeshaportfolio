"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen w-full h-full bg-gray-900 text-gray-200">

      <div id="about-me" className="w-full mt-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-center mb-10"
        >
          <h1 className="text-[80px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          About Me
          </h1>
          <p className="mt-4 text-lg text-gray-400 px-4 md:px-20 text-center">
          I am Kumesha Rashmi, an undergraduate Computer Engineering student at the University of Ruhuna, Faculty of Engineering. I am a highly motivated and results-driven individual passionate about exploring various fields within computer engineering, including web development, mobile app development, and machine learning.

          I am eager to learn new technologies, enhance my skills, and collaborate on exciting projects.Currently, I am actively learning DevOps, networking, AI, and embedded system design to broaden my knowledge and skill set. Additionally, I am working on projects in these fields to further enhance my abilities and gain hands-on experience. My current technical experience includes front-end technologies like React, MUI, and Tailwind, back-end frameworks such as Node.js and Express, and mobile development using Flutter/Dart. I also have a solid foundation in data structures, algorithms, and software engineering principles.

          Currently, I am seeking a software developer internship to apply my technical skills, gain practical experience, and contribute to impactful solutions in a collaborative and dynamic environment.
</p>

        </motion.div>

        <div className="flex flex-col md:flex-row  justify-around w-full px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col items-center mb-10 md:mb-0"
          >
            <Image
              src="/cer.png"
              alt="Certificate"
              width={100}
              height={100}
              className="mb-4"
            />
          <h3 className="text-lg font-bold">Certificates</h3>
<ul className="text-gray-400 list-disc list-inside">
  <li>
    <a href="https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
      Python Course
    </a> (University of Moratuwa, Department of Computer Science and Engineering).
  </li>
  <li>
    <a href="https://www.coursera.org/account/accomplishments/verify/CDLAGGZH0IWU?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
      Supervised Machine Learning Regression and Classification Course
    </a> (Coursera).
  </li>
  <li>
    <a href="https://certificate.hack2skill.com/user/aibuilderslab2/2024H2S10AIBL-P200541" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
      AI Builders Lab Bootcamp
    </a> (Google for Developers and Hack2Skill).
  </li>
  <li>
    <a href="https://www.offidocs.com/media/system/app/view_intro_offidocs_nav.php?companyname=udemy" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
      Python Data Analytics Real-World Projects
    </a> (Udemy).
  </li>
  <li>
    <a href="https://www.hackerrank.com/certificates/8ef3a7c9f27f" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
      CSS Basic Certificate
    </a>, 
    <a href="https://www.hackerrank.com/certificates/0b366be73bf6" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
      SQL Basic Certificate
    </a> (Hackerrank).
  </li>
  <li>
    <a href="https://www.simplilearn.com/free-mern-stack-program-skillup?utm_source=shared-certificate&utm_medium=shared-course&utm_campaign=shared-certificate-course-promotion" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
      MERN Stack Course
    </a> (Simplilearn).
  </li>
  <li>
    <a href="https://www.mygreatlearning.com/certificate/ZZDUUQBO" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
      Advanced UI/UX for Beginners
    </a>,
    <a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/flutter-for-beginners" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
      Flutter for Beginners
    </a> (Great Learning Academy).
  </li>
</ul>
            
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col items-center mb-10 md:mb-0"
          >
            <Image
              src="/code.png"
              alt="Competition"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-lg font-bold">Competitions</h3>
            <ul className="text-gray-400 list-disc list-inside">
              <li>Participated in Xtream Encode, organized by ENCIDE MACE in collaboration with IEEEXtreme 18.0 (Region 10).</li>
              <li>Participated Hackholics 6.0 selected as top ten finalists organized by IEEE WIE student branch UCSC.</li>
              <li>Participated in eminence 4.0 organized by IEEE WIE Ruhuna student branch in there we created microcontroller based car parking system.</li>
              <li>Participated in ballerina competition organized by WSO2 in there we created Decentralized voting platform web application backend supporting by ballerina and frontend used react with tailwind css and vite.</li>
              <li>Participated in Codesprint 8 organized by Informatic Institute of Technology IEEE student branch.</li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col items-center"
          >
            <Image
              src="/comu.png"
              alt="Extracurricular"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-lg font-bold">Extracurriculars</h3>
            <ul className="text-gray-400 list-disc list-inside">
              <li>IEEEXtreme 18.0 Proctor Program Sub-Committee general team member.</li>
              <li>OC member of the registration team for Ad Astra 1.00-half night camp organized by faculty of Engineering University of Ruhuna.</li>
              <li>SEDS Ruhuna Education Team Member.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;