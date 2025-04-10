'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Squash as HamburgerSquash } from 'hamburger-react';
import { ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const pathname = usePathname();
   const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
   };

   const navItems = [
      { href: '/', label: 'HOME' },
      { href: '/portfolio', label: 'PORTFOLIO' },
      { href: '/resume', label: 'RESUME' },
      { href: '/contact', label: 'CONTACT' },
   ];

   return (
      <header className="container flex justify-between fixed mx-auto px-4 md:px-12 py-3 items-center inset-x-0 md:top-4 lg:rounded-xl bg-black md:bg-black/10 md:border border-white/10 backdrop-blur-sm z-50 h-20 montserrat-p">
         <div className="text-2xl text-white font-semibold">
            <Link href="/">
               adoo<span className="text-blue-900">devv</span>
            </Link>
         </div>

         {/* Desktop Navigation */}
         <div className="hidden md:flex items-center space-x-8 relative text-xs">
            {navItems.map((item) => (
               <Link
                  key={item.href}
                  href={item.href}
                  className="flex text-white font-semibold hover:text-blue-900 transition-colors duration-500 relative w-auto justify-center"
               >
                  {item.label}
                  {pathname === item.href && (
                     <motion.div
                        layoutId="underline"
                        className="w-full absolute left-0 right-0 h-1 rounded-full bg-blue-900 bottom-[-26px]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                     />
                  )}
               </Link>
            ))}

            <button className="hidden text-white font-bold md:flex items-center bg-blue-900 px-4 py-2 rounded-lg hover:-translate-y-1 transition-all duration-500">
               DOWNLOAD CV
               <ArrowDown className="w-4 h-4 ml-2" />
            </button>
         </div>

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
                  className="md:hidden absolute top-19 inset-x-0 bg-black rounded-b-xl pb-4 montserrat-p"
               >
                  <div className="px-2 py-3 space-y-4 flex flex-col items-center font-semibold text-sm">
                     {navItems.map((item) => (
                        <Link
                           key={item.href}
                           href={item.href}
                           className={`w-full text-center px-3 py-2 rounded-lg ${pathname === item.href ? 'text-blue-900' : 'text-white'}`}
                           onClick={toggleMobileMenu}
                        >
                           {item.label}
                        </Link>
                     ))}
                     <button className="w-2/3 text-white text-center px-3 py-2 rounded-lg bg-blue-900">
                        DOWNLOAD CV
                     </button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
};

export default Header;