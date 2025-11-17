'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight' | 'stagger';
  delay?: number;
  duration?: number;
  trigger?: boolean;
}

const AnimationWrapper = ({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  trigger = true
}: AnimationWrapperProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || !trigger) return;

    const ctx = gsap.context(() => {
      const element = elementRef.current;
      if (!element) return;

      const baseVars = {
        opacity: 1,
        duration,
        delay,
        ease: "power3.out"
      };

      switch (animation) {
        case 'fadeUp':
          gsap.fromTo(element, 
            { opacity: 0, y: 60 },
            { 
              ...baseVars,
              y: 0,
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
          break;
        
        case 'fadeIn':
          gsap.fromTo(element,
            { opacity: 0 },
            {
              ...baseVars,
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
          break;
        
        case 'scaleIn':
          gsap.fromTo(element,
            { opacity: 0, scale: 0.8 },
            {
              ...baseVars,
              scale: 1,
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
          break;
        
        case 'slideLeft':
          gsap.fromTo(element,
            { opacity: 0, x: 100 },
            {
              ...baseVars,
              x: 0,
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
          break;
        
        case 'slideRight':
          gsap.fromTo(element,
            { opacity: 0, x: -100 },
            {
              ...baseVars,
              x: 0,
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
          break;
        
        case 'stagger':
          const children = element.children;
          gsap.fromTo(children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.2,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
          break;
      }
    }, elementRef);

    return () => ctx.revert();
  }, [animation, delay, duration, trigger]);

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

export default AnimationWrapper;