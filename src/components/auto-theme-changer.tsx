'use client';

import { useEffect, useState } from 'react';

const themes = ['theme-rose', 'theme-terracotta'];

export function AutoThemeChanger() {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex(prevIndex => (prevIndex + 1) % themes.length);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.classList.remove(...themes);
    document.body.classList.add(themes[themeIndex]);
  }, [themeIndex]);

  return null; // This component does not render anything
}
