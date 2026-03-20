import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";

export default function Footer() {
   return (
      <footer className="container mx-auto relative bottom-0 bg-[#006366] text-white p-6 rounded-xl">
         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/">
               <Image
                  src="/icon-foreground.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  loading="eager"
                  className="inline-block mr-2"
               />
            </Link>
            <div>
               <p className="text-white/60 text-sm text-center">
                  &copy; {new Date().getFullYear()} ADOO<span className="text-[#AEBE89]">DEVV</span>. ALL RIGHTS RESERVED.
               </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-6 items-center">
               <Link href="https://www.github.com/adoodevv/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub className="h-5 w-5 text-[#DAE3BB] hover:text-white transition-colors duration-300" />
               </Link>
               <Link href="https://twitter.com/adoodevv/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaXTwitter className="h-5 w-5 text-[#DAE3BB] hover:text-white transition-colors duration-300" />
               </Link>
               <Link href="https://hashnode.com/@adoodevv/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaHashnode className="h-5 w-5 text-[#DAE3BB] hover:text-white transition-colors duration-300" />
               </Link>
               <Link href="https://instagram.com/adoodevv/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaInstagram className="h-5 w-5 text-[#DAE3BB] hover:text-white transition-colors duration-300" />
               </Link>
               <Link href="https://www.linkedin.com/in/jonathan-adoo/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedinIn className="h-5 w-5 text-[#DAE3BB] hover:text-white transition-colors duration-300" />
               </Link>
               <Link href="https://www.youtube.com/@adoodevv/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaYoutube className="h-5 w-5 text-[#DAE3BB] hover:text-white transition-colors duration-300" />
               </Link>
            </div>
         </div>
      </footer>
   );
}