'use client'
import { useState, useEffect, useRef } from 'react';

const TypingAnimation = ({ items = [] as string[], typingSpeed = 150, deletingSpeed = 75, delayBetweenItems = 2000 }) => {
   const [currentItemIndex, setCurrentItemIndex] = useState(0);
   const [displayText, setDisplayText] = useState('');
   const [isTyping, setIsTyping] = useState(true);
   const [isPaused, setIsPaused] = useState(false);

   const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

   useEffect(() => {
      // Clean up any existing timeout when component unmounts
      return () => {
         if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
   }, []);

   useEffect(() => {
      if (items.length === 0) return;

      const currentItem = items[currentItemIndex];

      if (isTyping) {
         // Still typing the current word
         if (displayText.length < currentItem.length) {
            timeoutRef.current = setTimeout(() => {
               setDisplayText(currentItem.substring(0, displayText.length + 1));
            }, typingSpeed);
         }
         // Finished typing, pause before deleting
         else {
            setIsPaused(true);
            timeoutRef.current = setTimeout(() => {
               setIsPaused(false);
               setIsTyping(false);
            }, delayBetweenItems);
         }
      } else {
         // Still deleting the current word
         if (displayText.length > 0) {
            timeoutRef.current = setTimeout(() => {
               setDisplayText(currentItem.substring(0, displayText.length - 1));
            }, deletingSpeed);
         }
         // Finished deleting, move to next word
         else {
            setIsTyping(true);
            setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
         }
      }
   }, [currentItemIndex, delayBetweenItems, displayText, isTyping, isPaused, items, deletingSpeed, typingSpeed]);

   return (
      <div className="typing-animation">
         <span className="typing-text">{displayText}</span>
         <span className={`cursor ${isPaused ? 'blink' : ''}`}>|</span>
      </div>
   );
};

export default TypingAnimation;