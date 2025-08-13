import { useState, useEffect, useRef, useCallback } from 'react';

export const useScrollFlag = (threshold = 50) => {
  const [flag, setFlag] = useState(false);
  const rAF = useRef<number | null>(null);
  const handle = useCallback(() => {
    if (rAF.current) cancelAnimationFrame(rAF.current);
    rAF.current = requestAnimationFrame(() => setFlag(window.scrollY > threshold));
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handle, { passive: true });
    handle();
    return () => {
      window.removeEventListener('scroll', handle);
      if (rAF.current) cancelAnimationFrame(rAF.current);
    };
  }, [handle]);
  return flag;
};
