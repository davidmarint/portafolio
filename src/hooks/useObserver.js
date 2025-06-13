import { useEffect, useState } from 'react';

export const useObserver = (elementId) => {

     const [isVisible, setIsVisible] = useState(false);


       useEffect(() => {
         const observer = new IntersectionObserver(
           ([entry]) => {
             if (entry.isIntersecting) {
               setIsVisible(true);
             }
           },
           { threshold: 0.3 }
         );
     
         const section = document.getElementById(elementId);
         if (section) {
           observer.observe(section);
         }
     
         return () => {
           if (section) {
             observer.unobserve(section);
           }
         };
       }, []);
       return isVisible;
}