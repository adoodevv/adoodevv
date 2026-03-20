'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Squash as HamburgerSquash } from 'hamburger-react';
import { ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const pathname = usePathname();
   const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
   };

   const navItems = [
      { href: '/', label: 'HOME' },
      { href: '/projects', label: 'PROJECTS' },
      { href: '/technical-writing', label: 'TECHNICAL WRITING' },
      { href: '/open-source', label: 'OPEN SOURCE' },
      { href: '/robotics', label: 'ROBOTICS' },
   ];

   return (
      <header className="container flex justify-between fixed mx-auto px-4 md:px-12 py-3 items-center inset-x-0 md:top-4 border-2 border-[#AEBE89] lg:rounded-xl bg-[#006366]/90 backdrop-blur-md z-50 h-20 montserrat-p">
         <Link href="/">
            <Image
               src="/icon-foreground.png"
               alt="Logo"
               width={50}
               height={50}
               loading="eager"
               className="inline-block mr-2"
            />
         </Link>

         {/* Desktop Navigation */}
         <div className="hidden md:flex items-center space-x-8 relative text-xs">
            {navItems.map((item) => (
               <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex hover:text-white transition-colors duration-300 font-semibold relative w-auto justify-center ${pathname === item.href ? 'text-white' : 'text-[#DAE3BB]'
                     }`}
               >
                  {item.label}
                  {pathname === item.href && (
                     <motion.div
                        layoutId="underline"
                        className="w-full absolute left-0 right-0 h-1 rounded-full bg-[#DAE3BB] bottom-[-26px]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                     />
                  )}
               </Link>
            ))}
         </div>

         <a
            href="/jonathan-darko-adoo.pdf"
            download
            className="text-xs hidden text-[#006366] font-bold md:flex items-center bg-[#DAE3BB] px-4 py-2 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-500"
         >
            RESUME
            <ArrowDown className="w-4 h-4 ml-2" />
         </a>

         {/* Mobile Menu Button */}
         <div className="md:hidden focus:outline-none text-white">
            <HamburgerSquash
               toggled={mobileMenuOpen}
               toggle={toggleMobileMenu}
               size={25}
               duration={0.5}
               easing="ease-in"
            />
         </div>

         {/* Mobile Menu */}
         <AnimatePresence>
            {mobileMenuOpen && (
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden absolute top-19 inset-x-0 bg-[#006366] rounded-b-xl pb-4 montserrat-p shadow-xl"
               >
                  <div className="px-2 py-3 space-y-4 flex flex-col items-center font-semibold text-sm">
                     {navItems.map((item) => (
                        <Link
                           key={item.href}
                           href={item.href}
                           className={`w-full text-center px-3 py-2 rounded-lg transition-colors duration-200 ${pathname === item.href
                                 ? 'text-white bg-white/10'
                                 : 'text-[#DAE3BB] hover:text-white'
                              }`}
                           onClick={toggleMobileMenu}
                        >
                           {item.label}
                        </Link>
                     ))}
                     <a
                        href="/jonathan-darko-adoo.pdf"
                        download
                        className="w-2/3 text-[#006366] font-bold text-center px-3 py-2 rounded-lg bg-[#DAE3BB]"
                     >
                        RESUME
                     </a>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
};

export default Header;