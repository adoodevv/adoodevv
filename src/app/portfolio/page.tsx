import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaArrowRight } from "react-icons/fa";
import FadeUpAnimation from "@/components/FadeUp";

export const metadata = {
   title: 'Portfolio | adoodevv',
}

const projects = [
   {
      title: "YARA Website​",
      image: "/portfolio/yara.png",
      link: "https://yara-website-kappa.vercel.app/",
   },
   {
      title: "Differential robot​",
      image: "/portfolio/gazebo.png",
      link: "https://www.github.com/adoodevv/diff_drive_robot",
   },
   {
      title: "Mind2Matter Website",
      image: "/portfolio/mind2matter.png",
      link: "https://mind2matter.vercel.app/",
   },
   {
      title: "Get Up Let's Pray",
      image: "/portfolio/getupletspray.png",
      link: "https://getupletspray.vercel.app/",
   },
   {
      title: "Offgrid Labs Website​",
      image: "/portfolio/offgrid.png",
      link: "https://offgrid-labs-woad.vercel.app/",
   },
   {
      title: "Mikrobot Academy Website",
      image: "/portfolio/mikrobot.png",
      link: "https://mikrobotacademy.com/",
   },
   {
      title: "AIC Real Estates​",
      image: "/portfolio/aic.png",
      link: "https://aicrealestates.com/",
   },
   {
      title: "Taskio Task Matching App",
      image: "/portfolio/taskio.png",
      link: "https://taskio-mu.vercel.app/",
   },
   {
      title: "Elysian Treats Website​",
      image: "/portfolio/elysian.png",
      link: "https://elysian-treats.vercel.app/",
   },
   {
      title: "Movie Dashboard​",
      image: "/portfolio/movie.png",
      link: "https://adoodevv-exxmon.vercel.app/",
   },
   {
      title: "Ecochain Website​",
      image: "/portfolio/ecochain.png",
      link: "https://www.myceliumlabs.xyz/",
   },
];

const Portfolio = () => {
   return (
      <div className="container relative mx-auto items-center min-h-screen">
         <div className="relative w-full h-[50vh] rounded-b-4xl overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Image
               src="/hero5.jpg"
               alt="Ocean background"
               fill
               className="object-cover object-center"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
               <h2 className="text-base md:text-lg font-bold text-center text-white">
                  PORTFOLIO
               </h2>
               <h1 className="text-4xl md:text-6xl font-bold text-center text-white">
                  Work I Have Done
               </h1>
            </div>
         </div>

         <div className="container mx-auto px-4 z-20 absolute top-[40%]">
            <div className="grid md:grid-cols-3 gap-4">
               {projects.map((project, index) => (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                     <div className="relative group bg-neutral-900 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-blue-900/80 scale-y-0 group-hover:scale-y-25 origin-bottom transition-transform duration-500 z-30 pointer-events-none md:block hidden rounded-b-xl" />

                        <div className="md:hidden absolute bottom-0 left-0 w-full h-1/4 bg-blue-900/80 z-30 rounded-b-lg pointer-events-none" />

                        <div className="relative w-full h-48 md:h-54">
                           <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                           />
                        </div>

                        <div className="absolute md:bottom-2 bottom-1 left-4 right-4 z-40 flex items-center justify-between opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-white font-semibold">
                              {project.title}
                           </h3>

                           <div className="p-3 bg-green-300 rounded-full shadow-md">
                              <FaArrowRight className="text-blue-900" />
                           </div>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
            <div className="py-16">
               <Footer />
            </div>
         </div>
      </div>
   );
};

export default Portfolio;
