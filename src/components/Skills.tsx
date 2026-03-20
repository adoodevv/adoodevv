import Image from "next/image";
import FadeUpAnimation from "./FadeUp";

const tools = [
   {
      id: 1,
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
   },
   {
      id: 2,
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
   },
   {
      id: 3,
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
   },
   {
      id: 4,
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
   },
   {
      id: 5,
      name: "ROS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg",
   },
   {
      id: 6,
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
   },
   {
      id: 7,
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
   },
   {
      id: 8,
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
   },
   {
      id: 9,
      name: "Arduino",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
   },
   {
      id: 10,
      name: "Gazebo",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gazebo/gazebo-original.svg",
   },
   {
      id: 11,
      name: "OpenCV",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
   },
   {
      id: 12,
      name: "Bash",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
   },
   {
      id: 13,
      name: "Fusion 360",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fusion/fusion-original.svg",
   },
   {
      id: 14,
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
   },
];

const Skills = () => {
   return (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
         {tools.map((tool) => (
            <FadeUpAnimation key={tool.id} delay={tool.id * 0.05}>
               <div className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-[#DAE3BB]/60 hover:border-[#006366]/40 hover:shadow-md transition-all duration-300">
                  <div className="animate-wiggle">
                     <Image
                        width={40}
                        height={40}
                        src={tool.icon}
                        alt={tool.name}
                        className="w-10 h-10"
                     />
                  </div>
                  <span className="text-xs font-semibold text-[#555] group-hover:text-[#006366] transition-colors duration-300 text-center leading-tight">
                     {tool.name}
                  </span>
               </div>
            </FadeUpAnimation>
         ))}
      </div>
   );
};

export default Skills;
