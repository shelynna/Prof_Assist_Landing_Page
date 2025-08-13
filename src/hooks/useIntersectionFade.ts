import { useEffect, useRef, useState } from 'react';

export function useIntersectionFade<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);
  return { ref, visible };
}