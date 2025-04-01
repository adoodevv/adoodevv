'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
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
      { href: '/', label: 'Home' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/resume', label: 'Resume' },
      { href: '/contact', label: 'Contact' },
   ];

   return (
      <header className="flex items-center justify-center fixed inset-x-0 top-4 lg:left-4 lg:right-4 lg:rounded-xl bg-black/50 border border-primary/10 backdrop-blur-sm z-50 h-20">
         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">
               <Link href="/">
                  adoo<span className="text-accent">devv</span>
               </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative">
               {navItems.map((item) => (
                  <Link
                     key={item.href}
                     href={item.href}
                     className="flex text-primary/70 font-bold hover:text-primary transition-colors duration-500 relative w-auto justify-center"
                  >
                     {item.label}
                     {pathname === item.href && (
                        <motion.div
                           layoutId="underline"
                           className="w-full absolute left-0 right-0 h-1 rounded-full bg-accent bottom-[-26px]"
                           transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                     )}
                  </Link>
               ))}

               <button className="hidden text-white font-bold md:flex items-center bg-accent px-4 py-2 rounded-md hover:-translate-y-1 transition-all duration-500">
                  Download CV
                  <ArrowDown className="w-4 h-4 ml-2" />
               </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden focus:outline-none text-primary">
               <HamburgerSquash
                  toggled={mobileMenuOpen}
                  toggle={toggleMobileMenu}
                  size={25}
                  duration={0.5}
                  easing="ease-in"
               />
            </div>
         </div>

         {/* Mobile Menu */}
         <AnimatePresence>
            {mobileMenuOpen && (
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden absolute top-20 inset-x-0 bg-black/50 border-b border-primary/10 shadow-lg rounded-b-xl pb-4"
               >
                  <div className="px-2 pt-2 pb-3 space-y-4 flex flex-col items-center">
                     {navItems.map((item) => (
                        <Link
                           key={item.href}
                           href={item.href}
                           className={`w-full text-center px-3 py-2 font-roman rounded-lg text-primary/50 hover:text-primary transition-colors duration-500 ${pathname === item.href ? 'text-primary' : ''}`}
                           onClick={toggleMobileMenu}
                        >
                           {item.label}
                        </Link>
                     ))}
                     <button className="w-2/3 text-center px-3 py-2 font-roman rounded-full bg-primary hover:-translate-y-1 transition-all duration-500">
                        Download CV
                     </button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
};

export default Header;