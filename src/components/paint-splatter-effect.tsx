'use client';

import { useEffect } from 'react';

export function PaintSplatterEffect() {
  useEffect(() => {
    const createSplatter = (e: MouseEvent) => {
      // Array of theme colors to choose from
      const colors = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--chart-4))'];
      
      const splatter = document.createElement('div');
      splatter.className = 'paint-splatter';
      
      // Select a random color
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomRotation = Math.floor(Math.random() * 360);

      // We use CSS variables to pass dynamic values to the CSS animation
      splatter.style.setProperty('--splatter-color', randomColor);
      splatter.style.setProperty('--splatter-rotation', `${randomRotation}deg`);
      
      // Position the splatter at the cursor, adjusting for the element's size
      splatter.style.left = `${e.clientX - 15}px`;
      splatter.style.top = `${e.clientY - 15}px`;
      
      document.body.appendChild(splatter);
      
      // Remove the splatter element from the DOM after the animation finishes
      setTimeout(() => {
        splatter.remove();
      }, 500); // Must match animation duration
    };
    
    window.addEventListener('click', createSplatter);
    
    return () => {
      window.removeEventListener('click', createSplatter);
    };
  }, []);
  
  return null; // This component doesn't render anything itself
}
