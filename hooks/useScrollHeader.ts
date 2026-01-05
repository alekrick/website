import { useState, useEffect, useRef } from "react";

export const useScrollHeader = (): boolean => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const previousScrollY = lastScrollY.current;
          
          // Always show menu at the top of the page
          if (currentScrollY <= 10) {
            setIsScrollingDown(false);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }
          
          // Scrolling up - show menu immediately
          if (currentScrollY < previousScrollY) {
            setIsScrollingDown(false);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }
          
          // Scrolling down and past 100px - hide menu
          if (currentScrollY > previousScrollY && currentScrollY > 100) {
            setIsScrollingDown(true);
          }
          
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrollingDown;
};

