import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";

export default function Footer() {
   return (
      <footer className="container mx-auto relative bottom-0 bg-neutral-900 text-white p-4 rounded-lg border-b-2 border-blue-900">
         <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
               <p className="text-white/50 text-sm">
                  &copy; {new Date().getFullYear()} adoo<span className="text-blue-900">devv</span>. ALL RIGHTS RESERVED.
               </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-6 items-center">
               <Link href="https://www.github.com/adoodevv/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub className="h-5 w-5 text-white/50 hover:text-white transition-colors duration-300" />
               </Link>
               <Link href="https://twitter.com/adoodevv/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaXTwitter className="h-5 w-5 text-white/50 hover:text-white transition-colors duration-300" />
               </Link>
               <Link href="https://hashnode.com/@adoodevv/"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaHashnode className="h-5 w-5 text-white/50 hover:text-white transition-colors duration-300" />
               </Link>
               <Link href="https://instagram.com/adoodevv/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaInstagram className="h-5 w-5 text-white/50 hover:text-white transition-colors duration-300" />
               </Link>
               <Link href="https://www.linkedin.com/in/jonathan-adoo/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedinIn className="h-5 w-5 text-white/50 hover:text-white transition-colors duration-300" />
               </Link>
               <Link href="https://www.youtube.com/@adoodevv/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaYoutube className="h-5 w-5 text-white/50 hover:text-white transition-colors duration-300" />
               </Link>
            </div>
         </div>
      </footer>
   );
}