import { useState, useEffect } from 'react';
import { CalendarCheck } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants/config';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 px-6 py-3.5 bg-wine text-blush text-sm font-medium tracking-wider uppercase border border-wine hover:bg-wine-light hover:border-wine-light transition-all duration-500 shadow-lg shadow-wine/20 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-label="Reservá tu mesa"
    >
      <CalendarCheck size={18} />
      <span className="hidden sm:inline">Reservá tu mesa</span>
    </a>
  );
}
