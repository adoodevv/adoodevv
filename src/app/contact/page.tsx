import Footer from "@/components/Footer"
import Profile from "@/components/Profile";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"

const Contact = () => {
   return (
      <div className="container mx-auto min-h-screen">
         <div className="relative w-full h-[50vh] rounded-b-4xl overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Image
               src="/hero.jpg"
               alt="Ocean background"
               fill
               className="object-cover object-center"
               priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
               <h2 className="text-base md:text-lg font-bold text-center">
                  HAVING QUESTIONS?
               </h2>
               <h1 className="text-4xl md:text-6xl font-bold text-center">
                  Let&apos;s Get in Touch
               </h1>
            </div>
         </div>

         <div className="container mx-auto z-20 absolute top-[40%]">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 p-4 w-full">
               <div className="md:sticky md:top-24 md:self-start md:h-[calc(100vh-5rem)] w-full">
                  <Profile />
               </div>
               <div className="md:col-span-2 w-full md:mt-10">
                  <form className="w-full rounded-lg border-b-2 border-blue-900 bg-neutral-900 p-8 shadow-lg">
                     <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-white/50">
                           Name
                        </label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           className="mt-1 block w-full p-4 rounded-md border border-white/10 sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                           placeholder="Your Name"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white/50 focus:outline-none ">
                           Email
                        </label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           className="mt-1 block w-full p-4 rounded-md border border-white/10 sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                           placeholder="Your Email"
                        />
                     </div>
                     <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-white/50 focus:outline-none ">
                           Message
                        </label>
                        <textarea
                           id="message"
                           name="message"
                           rows={4}
                           className="mt-1 block w-full p-4 rounded-md border border-white/10 sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                           placeholder="Your Message"
                        ></textarea>
                     </div>
                     <div className="flex justify-center">
                        <button
                           type="submit"
                           className="text-SM md:text-lg font-semibold flex items-center gap-2 px-6 py-2 text-white bg-blue-900 rounded-md hover:opacity-80 transition duration-300"
                        >
                           SEND
                           <FaArrowRight className="text-sm" />
                        </button>
                     </div>
                  </form>
                  <div className="py-16">
                     <Footer />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact