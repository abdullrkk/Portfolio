'use client';

import { useState, useEffect } from 'react';
import { throttle } from './throttle';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Check for mobile devices
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      // Also check screen width
      const smallScreen = window.innerWidth < 768;
      setIsMobile(mobile || smallScreen);
    };

    checkMobile();
    
    // Throttle resize handler to prevent excessive re-renders
    const throttledCheck = throttle(checkMobile, 100);
    window.addEventListener('resize', throttledCheck);
    
    return () => window.removeEventListener('resize', throttledCheck);
  }, []);

  return isMobile;
}
