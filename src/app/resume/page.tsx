import Image from "next/image"
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import { FaArrowRight, FaCircle } from "react-icons/fa";
import Link from "next/link";
import FadeUpAnimation from "@/components/FadeUp";

export const metadata = {
   title: 'Resume | adoodevv',
}

const softSkills = [
   "Team Player", "Communication", "Leadership", "Curiosity", "Decision Making", "Problem Solving", "Time Management"
]

const professionalExperience = [
   {
      title: "Robotics Trainer​",
      company: "Mikrobot Academy",
      location: "Accra & Kumasi​",
      date: "August 2022 - Date",
      description: [
         "Instruct 50+ students aged 8-15 in EV3 and Arduino programming, fostering their interest in robotics and technology through hands - on learning approaches",
         "Mentor student teams through national and world robotics competitions, achieving 3 podium finishes in past years",
         "Facilitate weekly trainings in circuit building and programming, enabling students to create functional autonomous robots from scratch"
      ],
      link: "https://www.mikrobotacademy.com/"
   },
   {
      title: "Robotics Project Lead",
      company: "KNUST DIPPER Lab",
      location: "KNUST - Kumasi",
      date: "March 2025 - Date",
      description: [
         "Leading development of an autonomous precision farming robot using ROS (Robot Operating System), reducing manual labor by 40% through automated planting, watering, and soil monitoring.",
         "Designing and implementing SLAM (Simultaneous Localization and Mapping) for real-time navigation across 5+ acre test fields, achieving 92% path accuracy in unstructured environments.",
         "Leading a cross-functional team of 1 in mechanical and software integration each, delivering a functional prototype 3 months ahead of schedule."
      ]
   },
   {
      title: "Web Developer",
      company: "Young Africans Research Academy",
      location: "Remote",
      date: "February 2025 - Date",
      description: [
         "Built and deployed YARA’s corporate website using Next.js, improving page load speeds by 35% (from 4.2s to 2.7s) via SSR and optimized media handling.",
         "Integrated Sanity CMS to streamline content updates, enabling non-technical teams to manage 10+ pages independently, reducing dev requests by 70%.",
         "Implemented EmailOctopus for newsletter campaigns, growing the subscriber base from 101 to 3,200+ within 6 months through targeted SEO and landing page optimizations."
      ],
      link: "https://www.yarafrica.org/"
   },
   {
      title: "Web Developer",
      company: "Offgrid Labs",
      location: "Remote",
      date: "March 2025 - Date",
      description: [
         "Developed a Next.js web app for Offgrid Labs’ Ethereum staking platform.",
         "Architected a responsive UI with Tailwind CSS, achieving a 95% Lighthouse accessibility score and reducing bounce rates by 25% on mobile devices.",
         "Automated CI/CD pipelines using Vercel, cutting deployment times by 60% and ensuring zero downtime during 15+ iterative releases."
      ],
      link: "https://offgridlabs.org/"
   }
   ,
   {
      title: "Mechanical Lead",
      company: "Team Pathfinders",
      location: "Izmir - Turkey",
      date: "November 2024",
      description: [
         "Spearheaded the design and construction of competition robot for World Robot Olympiad, incorporating innovative mechanical solutions to meet challenge requirements",
         "Engineered and implemented complex circuitry systems, ensuring reliable performance and optimal power distribution throughout the robot",
         "Collaborated with software team to integrate mechanical and electrical systems, resulting in seamless robot operation during competition",
         "Led troubleshooting efforts during competition phases, achieving quick resolution of technical issues and maintaining robot functionality"
      ]
   },
]

const education = [
   {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Kwame Nkrumah University of Science and Technology",
      location: "Kumasi, Ghana",
      date: "2023 - 2026"
   },
]

const certificates = [
   {
      title: "Google Data Analytics",
      institution: "Coursera",
      date: "2022"
   },
   {
      title: "Code Foundations for ROS",
      institution: "The Construct",
      date: "2024"
   },
   {
      title: "Google UX Design",
      institution: "Coursera",
      date: "2023"
   }
]

const Resume = () => {
   return (
      <div className="container mx-auto min-h-screen">
         <div className="relative w-full h-[50vh] rounded-b-4xl overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Image
               src="/hero4.jpg"
               alt="Ocean background"
               fill
               className="object-cover object-center"
               priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
               <h2 className="text-base md:text-lg font-bold text-center">
                  RESUME
               </h2>
               <h1 className="text-4xl md:text-6xl font-bold text-center">
                  My Skills & Experience
               </h1>
            </div>
         </div>

         <div className="container mx-auto px-4 z-20 absolute top-[40%]">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
               <div className="md:sticky md:top-24 md:self-start md:h-[calc(100vh-5rem)] w-full">
                  <Profile />
               </div>

               <div className="md:col-span-2 w-full space-y-6 md:mt-20">
                  <div>
                     <h2 className="py-8">TOOLS & LANGUAGES</h2>
                     <Skills />
                  </div>
                  <div>
                     <h2 className="py-8">SOFT SKILLS</h2>
                     <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2 bg-neutral-900 border-b-2 rounded-lg border-blue-900">
                        {softSkills.map((skill, index) => (
                           <FadeUpAnimation key={index} delay={index * 0.1}>
                              <div className="p-4">
                                 <p className="flex items-center gap-2"><FaCircle className="text-green h-2 w-2 text-green-300 font-extrabold" />{skill}</p>
                              </div>
                           </FadeUpAnimation>
                        ))}
                     </div>
                  </div>
                  <div>
                     <h2 className="py-8">PROFESSIONAL EXPERIENCES</h2>
                     <div className="grid grid-cols-1 gap-4">
                        {professionalExperience.map((experience, index) => (
                           <FadeUpAnimation key={index} delay={index * 0.1}>
                              <div
                                 className="p-4 bg-neutral-900 border-b-2 rounded-lg border-blue-900"
                              >
                                 <h3 className="text-xl font-bold">{experience.title}</h3>
                                 <p className="text-green-300 py-4">{experience.company} | {experience.location} | {experience.date}</p>
                                 <ul className="list-disc list-inside">
                                    {experience.description.map((desc, idx) => (
                                       <li key={idx} className="text-white/50">{desc}</li>
                                    ))}
                                 </ul>
                                 {experience.link && (
                                    <Link
                                       href={experience.link}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="group text-green-300 mt-4 inline-block"
                                    >
                                       <p className="flex items-center">{experience.company}<FaArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-all duration-300" /></p>
                                    </Link>
                                 )}
                              </div>
                           </FadeUpAnimation>
                        ))}
                     </div>
                  </div>
                  <div>
                     <h2 className="py-8">EDUCATION</h2>
                     <div className="grid grid-cols-1 gap-4">
                        {education.map((edu, index) => (
                           <div
                              key={index}
                              className="p-4 bg-neutral-900 border-b-2 rounded-lg border-blue-900"
                           >
                              <h3 className="text-xl font-bold">{edu.degree}</h3>
                              <p className="text-green-300 py-4">{edu.institution} | {edu.location} | {edu.date}</p>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div>
                     <h2 className="py-8">CERTIFICATES</h2>
                     <div className="grid md:grid-cols-3 gap-4">
                        {certificates.map((cert, index) => (
                           <FadeUpAnimation key={index} delay={index * 0.1}>
                              <div className="p-4 bg-neutral-900 border-b-2 rounded-lg border-blue-900">
                                 <h3 className="text-xl font-bold">{cert.title}</h3>
                                 <p className="text-green-300 py-4">{cert.institution} | {cert.date}</p>
                              </div>
                           </FadeUpAnimation>
                        ))}
                     </div>
                  </div>
                  <div className="py-16">
                     <Footer />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Resume