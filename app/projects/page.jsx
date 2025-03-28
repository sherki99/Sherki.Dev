"use client";

import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "07",
    category: "ai",
    title: "Zaka Coach (Fitness App)",
    description: "AI-driven fitness app for personalized workouts & meal plans.",
    stack: [{ name: "React Native" }, { name: "FastAPI" }, { name: "AWS Lambda" }],
    //image: "/assets/projects/thumb7.png",  // Add image later
   // live: "https://zaka-coach.example.com",  // Add link later
   // github: 
  },
  {
    num: "08",
    category: "ai",
    title: "GoFinance",
    description: "Real-time financial analytics platform for investment decision-making.",
    stack: [{ name: "C#" }, { name: "MySQL" }],
   // image: "/assets/projects/thumb8.png",  // Add image later
   // live: "https://gofinance.example.com",  // Add link later
  },
  {
    num: "09",
    category: "ai",
    title: "BioBERT Health Analytics Platform",
    description: "Fine-tuned BioBERT model for improved health metrics predictions.",
    stack: [{ name: "PyTorch" }, { name: "BioBERT" }],
   // image: "/assets/projects/thumb9.png",  // Add image later
   // live: "https://biobert-health.example.com",  // Add link later
  },
  {
    num: "01",
    category: "fullstack",
    title: "Product Store App",
    description: "A dynamic full-stack product management application.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/projects/thumb1.png",
    live: "https://product-store-app-tkmt.onrender.com/",
   // github: "https://github.com/solarluiso/product-store-app",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Mood Mapper",
    description:
      "A web application to track and analyze your mood throughout the days.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Firebase" }],
    image: "/assets/projects/thumb2.png",
    live: "https://mood-mapper.netlify.app/",
    //github: "https://github.com/solarluiso/mood-tracker",
  },
  {
    num: "03",
    category: "frontend",
    title: "E-commerce Store",
    description:
      "A responsive e-commerce store to browse, view, and favorite products.",
    stack: [{ name: "React.js" }, { name: "TailwindCSS" }, { name: "Vite" }],
    image: "/assets/projects/thumb3.png",
    live: "https://ecommerce-ten-alpha-35.vercel.app/",
 //   github: "https://github.com/solarluiso/ecommerce",
  },
  {
    num: "04",
    category: "frontend",
    title: "Focus",
    description: "A sleek website designed to enhance productivity and focus.",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Framer-Motion" },
    ],
    image: "/assets/projects/thumb4.png",
    live: "https://focus-inky.vercel.app/",
  //  github: "https://github.com/solarluiso/focus",
  },
  {
    num: "05",
    category: "frontend",
    title: "Fit Physique",
    description: "A fitness-focused platform to track workouts and progress.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/projects/thumb5.png",
    live: "https://fitphysique-pi.vercel.app/",
  //  github: "https://github.com/solarluiso/fitphysique",
  },
  {
    num: "06",
    category: "frontend",
    title: "Modern Bank App",
    description: "An innovative banking website with a modern user interface.",
    stack: [{ name: "React.js" }, { name: "TailwindCSS" }, { name: "Vite" }],
    image: "/assets/projects/thumb6.png",
    live: "https://modern-bank-app-ebon-omega.vercel.app/",
  //  github: "https://github.com/solarluiso/modern-bank-app",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-8 text-accent text-center">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover rounded-xl"
                  priority={project.num === "02"}
                />
              </div>

              {/* Project Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/95 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2 text-white/80">
                  {project.description}
                </p>

                {/* Stack */}
                <ul className="flex gap-2 text-xs mt-2">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsArrowUpRight className="text-xl" />
                    </div>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsGithub className="text-xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
