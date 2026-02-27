/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

const technologies = [
  "Solidity",
  "Ethers.js",
  "Hardhat",
  "Javascript",
  "Typescript",
  "React",
  "React-Native/Expo",
  "Tailwind CSS", 
  "NextJS",
  "GSAP",
  "Express.js",
  "Node.js",
  "MongoDb",
];

const About = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col px-3md:px-16 lg:px-20 pt-16 sm:pt-20 
      max-w-7xl mx-auto w-full"
    >
      <h2
        className="text-3xl  xl:text-3xl md:text-4xl  text-center 
        mb-8 sm:mb-12 md:mb-16 mt-5 font-semibold text-gray-500 
        font-outfit tracking-wider"
      >
       About Me
      </h2>

      <div
        className="flex flex-col lg:flex-row items-center lg:items-start 
        gap-8 lg:gap-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Image
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1756303349/me_o5apj6.jpg"
            alt="Ayodeji Atanda's"
            height={300}
            width={300}
            priority
            className="border-dashed border-2 border-gray-400 object-cover 
            rounded-lg shadow-lg transition-transform duration-300 
            hover:scale-105"
          />
        </motion.div>

        <div className="space-y-6 text-base sm:text-lg lg:text-xl px-6 md:px-16  lg:px-20">
          <div className="space-y-4">
            <p className="leading-relaxed">
              Before diving into tech, I started with graphics design, which
              sparked my love for clean, beautiful UIs. Now, I blend that design
              sense with frontend and blockchain development to build digital
              products people enjoy using.
            </p>
            <p className="leading-relaxed">
              I’m always curious and growing — currently adding Go to my stack
              while staying active in the Web3 space with Solidity and dApps.
              Teaching and mentoring new developers keeps me sharp and grounded
              too.
            </p>
            <p className="leading-relaxed">
              When I’m not coding, you’ll find me swimming, vibing to music, or
              watching movies that spark new ideas. They help me unwind and feed
              my creativity in unexpected ways.
            </p>
          </div>

          <div className="pt-4 ">
            <h3 className="text-base mb-3 font-semibold text-gray-800">
              Technologies I work with:
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <span className="h-1.5 w-1.5 bg-gray-500 rounded-full" />
                  <span>{tech}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

About.displayName = "About";

export default About;
