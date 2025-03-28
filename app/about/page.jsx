"use client";

import { FaReact, FaNodeJs } from "@/node_modules/react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiPython,           
  SiTensorflow,       
  SiPytorch,          
  SiOpencv,           
  SiScikitlearn,      
  SiKeras,            
  SiNumpy,            
  SiPandas,               
} from "react-icons/si";
import { motion } from "framer-motion";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// about data
const about = {
  title: "About me",
  description:
    "I am a machine learning engineer with expertise in large language models (LLMs), graph-based technologies, and model prototyping. I specialize in developing advanced machine learning solutions that solve complex problems and drive innovation. With a strong foundation in both theory and practical implementation, I leverage cutting-edge techniques to build scalable and efficient AI systems.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Cherki Meziane",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+44) 0792 5047 8373",
    },
    {
      fieldName: "Email",
      fieldValue: "cherkimeziane99@outlook.com",
    },
    {
      fieldName: "Location",
      fieldValue: "London, UK",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Italian, Arab",
    },
  ],
};


// skills data
const skills = {
  title: "My skills",
  description:
    "Experienced in AI, machine learning, and full-stack development, I build scalable applications using modern frameworks, cloud platforms, and deep learning models, with a focus on data processing, neural networks, and computer vision.",
  skillList: [
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiTensorflow />,
      name: "TensorFlow",
    },
    {
      icon: <SiPytorch />,
      name: "PyTorch",
    },
    {
      icon: <SiOpencv />,
      name: "OpenCV",
    },
    {
      icon: <SiScikitlearn />,
      name: "Scikit-Learn",
    },
    {
      icon: <SiKeras />,
      name: "Keras",
    },
    {
      icon: <SiNumpy />,
      name: "NumPy",
    },
    {
      icon: <SiPandas />,
      name: "Pandas",
    },
    // siAws in the future in case 
  ],
};

// experience data
const experience = {
  icon: "/assets/about/badge.svg",
  title: "My experience",
  description:
    "Experienced in machine learning, AI research, and full-stack development, with a strong focus on deploying production-ready solutions.",
  items: [
    {
      position: "Machine Learning Engineer",
      duration: "May 2023 - Now",
      description: "Zirak, Torino, Italy - Worked on CNN models for satellite image processing and computer vision applications.",
    },
    {
      position: "Machine Learning Research Intern",
      duration: "May 2022 - Aug 2022",
      description: "Anglia Ruskin University - Developed ML models for disease detection, improving diagnostic accuracy by 13%.",
    },
    {
      position: "AI Developer & Full-stack Engineer",
      duration: "2023 - Present",
      description: "Zaka Coach (Fitness App) - Built an AI-powered fitness app with personalized meal and workout plans using GPT and RLHF.",
    },
    {
      position: "Software Developer",
      duration: "Oct 2021 - Jan 2022",
      description: "GoFinance - Developed a real-time financial analytics platform using C# and MySQL.",
    },
    {
      position: "Machine Learning Engineer",
      duration: "1 Year",
      description: "Zirak, Torino, Italy - Worked on CNN models for satellite image processing and computer vision applications.",
    }
  ],
};

// education data
const education = {
  icon: "/assets/about/cap.svg",
  title: "My education",
  description:
    "Solid academic foundation in computer science, enhanced by specialized certifications.",
  items: [
    {
      institution: "Coursera",
      degree: "Meta Front-End Developer Certificate",
      duration: "2023",
    },
    {
      institution: "Miami Dade College",
      degree: "Associate Degree in Computer Science",
      duration: "2016 - 2018",
    },
    {
      institution: "Istuto Luca Pacioli, CR, IR",
      degree: "Custrozione Ambiete Terrotorio",
      duration: "2015",
    },
  ],
};


const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] xl:px-[30px] xl:h-[582px]"
        >
          <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[25vh]">
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{about.title}</h3>
                  <p className="p">{about.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent uppercase">
                            {item.fieldName}
                          </span>
                          <h3 className="text-base uppercase text-white/80">
                            {item.fieldValue}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{skills.title}</h3>
                  <p className="p">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex flex-col justify-center items-center group">
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              {/* Display the skill name directly on smaller screens */}
                              <p className="text-sm mt-2 xl:hidden group-hover:text-accent transition-all duration-300">
                                {skill.name}
                              </p>
                            </TooltipTrigger>
                            {/* Tooltip content only visible on xl screens and larger */}
                            <TooltipContent className="hidden xl:block">
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{experience.title}</h3>
                  <p className="p">{experience.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[60px] flex items-center justify-center">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{education.title}</h3>
                  <p className="p">{education.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[60px] flex items-center justify-center">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
