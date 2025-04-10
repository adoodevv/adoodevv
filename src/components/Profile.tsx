import TypingAnimation from "@/components/TypingAnimation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const work = ["I'M A ROBOTICIST", "I'M A FRONTEND WEB DEVELOPER", "I'M A TUTOR", "I LOVE F1"];

const Profile = () => {
   return (
      <div className="md:w-full p-4 montserrat-p rounded-lg border-t-2 border-blue-900 bg-neutral-900 flex flex-col items-center justify-center">
         <Image
            src="/profile.png"
            alt="Profile Image"
            width={150}
            height={150}
            className="rounded-full mb-4"
         />
         <h3 className="montserrat-h3 mb-2 text-sm">JONATHAN DARKO ADOO</h3>
         <div className="font-semibold text-green-300 text-xs mb-6">
            <TypingAnimation
               items={work}
               typingSpeed={100}
               deletingSpeed={50}
               delayBetweenItems={1500}
            />
         </div>
         <div className="border-b border-white w-4/5 opacity-20"></div>
         <div className="flex gap-8 py-8">
            <Link href="https://x.com/adoodevv/"><FaXTwitter className="w-5 h-5" /></Link>
            <Link href="https://github.com/adoodevv/"><FaGithub className="w-5 h-5" /></Link>
            <Link href="https://instagram.com/adoodevv/"><FaInstagram className="w-5 h-5" /></Link>
            <Link href="https://hashnode.com/@adoodevv/"><FaHashnode className="w-5 h-5" /></Link>
            <Link href="https://www.youtube.com/@adoodevv/"><FaYoutube className="w-5 h-5" /></Link>
         </div>
         <div className="border-b border-white w-4/5 opacity-20"></div>
         <div className="my-4 w-4/5 text-sm font-semibold">
            <div className="flex justify-between items-center mb-1">
               <div>
                  RESIDENCE:
               </div>
               <div className="text-white/50">
                  GHANA
               </div>
            </div>
            <div className="flex justify-between items-center mb-1">
               <div>
                  CITY:
               </div>
               <div className="text-white/50">
                  ACCRA
               </div>
            </div>
            <div className="flex justify-between mb-1">
               <div>
                  INTERESTS:
               </div>
               <div className="flex flex-col text-white/50">
                  <div className="text-right">FORMULA 1</div>
                  <div className="text-right">BLOGGING</div>
                  <div className="text-right">ROBOTS</div>
               </div>
            </div>
         </div>
         <div className="border-b border-white w-4/5 opacity-20"></div>
         <Link href="mailto:adoojonathan412@gmail.com/">
            <button className="flex items-center text-sm md:text-base py-2 px-3 mt-4 bg-blue-900 rounded-lg font-semibold hover:opacity-80">CONTACT ME<CiMail className="w-5 h-5 ml-2" /></button>
         </Link>

      </div>
   )
}

export default Profile
