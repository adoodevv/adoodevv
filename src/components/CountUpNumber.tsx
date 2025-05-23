'use client'

import { useState, FC, useEffect } from "react"

type Props = {
   endValue: number;
   duration: number;
}

const CountUpNumber: FC<Props> = ({ endValue, duration }) => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      let startTime: number;
      let animationFrameId: number;

      const updateCount = (timestamp: number) => {
         if (!startTime) {
            startTime = timestamp;
         }
         const progress = timestamp - startTime;

         if (progress < duration) {
            const percentage = progress / duration;
            setCount(Math.min(endValue, percentage * endValue));
            animationFrameId = requestAnimationFrame(updateCount);
         } else {
            setCount(endValue);
         }
      };
      animationFrameId = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrameId);
   }, [endValue, duration]);

   return (
      <h3 className="font-bold text-2xl md:text-3xl">
         {Math.round(count)}
      </h3>
   )
}

export default CountUpNumber
