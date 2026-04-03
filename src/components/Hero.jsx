import { ChevronDown } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants/config';
import frenteImg from '../assets/frente.jpg';

export default function Hero() {
  const handleScrollDown = () => {
    const about = document.querySelector('#about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={frenteImg}
          alt="Fachada del restaurante Helen Green de noche"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-forest/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="w-12 h-px bg-sage mx-auto mb-8 animate-fade-in" />

        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-sage mb-6 animate-fade-in">
          Food & Drink's
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-blush leading-[0.95] mb-6 animate-slide-up">
          Helen Green
        </h1>

        <p className="font-body text-base md:text-lg text-blush/70 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-slow">
          Un edificio con historia, una cocina con identidad. Vení a vivir la experiencia.
        </p>

        {/* CTA */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-wine text-blush text-sm font-medium tracking-[0.2em] uppercase border border-wine hover:bg-wine-light hover:border-wine-light transition-all duration-300 animate-fade-in-slow"
        >
          Reservar Mesa
        </a>

        {/* Decorative line */}
        <div className="w-12 h-px bg-sage mx-auto mt-10 animate-fade-in-slow" />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blush/50 hover:text-blush transition-colors duration-300 animate-bounce"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
