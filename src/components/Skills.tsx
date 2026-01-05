import Image from "next/image";
import FadeUpAnimation from "./FadeUp";

const tools = [
   {
      id: 1,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
   },
   {
      id: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gazebo/gazebo-original.svg",
   },
   {
      id: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
   },
   {
      id: 4,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
   },
   {
      id: 5,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
   },
   {
      id: 6,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
   },
   {
      id: 7,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
   },
   {
      id: 8,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
   },
   {
      id: 9,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg",
   },
   {
      id: 10,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"
   },
   {
      id: 11,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fusion/fusion-original.svg"
   },
   {
      id: 12,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
   },
   {
      id: 13,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
   }
];

const Skills = () => {
   return (
      <div className="bg-neutral-900 rounded-lg p-4 border-b-2 border-blue-900">
         <div className="w-full">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
               {tools.map((tool) => (
                  <FadeUpAnimation key={tool.id} delay={tool.id * 0.1}>
                     <div className="p-4 transition-all duration-300 animate-wiggle hover:scale-110 transition-transform duration-300">
                        <Image
                           width={50}
                           height={50}
                           src={tool.icon}
                           alt="tool icon"
                           className="w-12 h-12"
                        />
                     </div>
                  </FadeUpAnimation>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Skills
