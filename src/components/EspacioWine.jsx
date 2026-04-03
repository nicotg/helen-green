import { useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useImageModal } from '../context/ImageModalContext';
import espacioWineImg from '../assets/espacio-wine.jpg';
import tarjetaEspacioImg from '../assets/tarjeta-espacio-wine.jpg';
import videoPaso1 from '../assets/espacio-wine-paso-1.mp4';
import videoPaso2 from '../assets/espacio-wine-paso-2.mp4';
import videoPaso3 from '../assets/espacio-wine-paso-3.mp4';
import videoPaso4 from '../assets/espacio-wine-paso-4.mp4';
import videoPaso5 from '../assets/espacio-wine-paso-5.mp4';
import videoCata from '../assets/video-cata-picapiedras.mp4';

const STEPS = [
  { video: videoPaso1, title: 'Paso 1', description: 'La selección de los vinos' },
  { video: videoPaso2, title: 'Paso 2', description: 'Preparación de la mesa' },
  { video: videoPaso3, title: 'Paso 3', description: 'El descorche' },
  { video: videoPaso4, title: 'Paso 4', description: 'La degustación' },
  { video: videoPaso5, title: 'Paso 5', description: 'El maridaje perfecto' },
];

export default function EspacioWine() {
  const sectionRef = useScrollAnimation();
  const { openImage } = useImageModal();
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    Array.from(container.children).forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    setActiveIndex(closestIndex);
  };

  return (
    <section
      id="espacio-wine"
      ref={sectionRef}
      className="section-padding bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-wine mb-4">
            Una Experiencia Exclusiva
          </p>
          <h2 className="section-title text-forest">
            Espacio Wine
          </h2>
          <p className="font-body text-forest/60 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Un rincón íntimo donde el vino es protagonista. Catas, degustaciones y eventos privados en un ambiente único.
          </p>
        </div>

        {/* Intro: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div
            className="scroll-hidden overflow-hidden cursor-pointer"
            onClick={() => openImage({ src: espacioWineImg, alt: 'Espacio Wine de Helen Green' })}
          >
            <img
              src={espacioWineImg}
              alt="Espacio Wine de Helen Green"
              className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="scroll-hidden">
            <div className="w-10 h-px bg-wine mb-8" />
            <h3 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6 leading-snug">
              Donde el vino <br />
              <span className="text-wine">cuenta su historia</span>
            </h3>
            <p className="font-body text-forest/70 leading-relaxed mb-4">
              Nuestro Espacio Wine es mucho más que una bodega. Es un lugar pensado para
              conectar con los sentidos, aprender sobre cada etiqueta y disfrutar de una
              experiencia guiada paso a paso.
            </p>
            <p className="font-body text-forest/70 leading-relaxed">
              Ideal para catas privadas, eventos corporativos o simplemente una noche
              diferente entre amigos.
            </p>
          </div>
        </div>

        {/* Step-by-step videos */}
        <div className="scroll-hidden">
          <div className="text-center mb-12">
            <div className="w-10 h-px bg-wine mx-auto mb-6" />
            <h3 className="font-display text-2xl md:text-3xl text-forest font-semibold">
              La Experiencia Paso a Paso
            </h3>
          </div>

          <div className="relative -mx-6 sm:mx-0 px-6 sm:px-0">
            <div 
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto gap-4 sm:gap-8 pb-8 pt-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-1/2"
              style={{ scrollPaddingLeft: '50%' }}
            >
              {STEPS.map((step, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer w-[75vw] sm:w-[320px] shrink-0 snap-center transition-all duration-500 ease-out ${
                    index === activeIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
                  }`}
                  onClick={() => openImage({ src: step.video, alt: `${step.title}: ${step.description}`, type: 'video' })}
                >
                  <div className="relative overflow-hidden bg-forest-light mb-4 rounded-lg shadow-lg">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full aspect-[4/5] sm:aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={step.video} type="video/mp4" />
                    </video>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-all duration-300" />
                    {/* Inactive gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent transition-opacity duration-500 pointer-events-none ${
                        index === activeIndex ? 'opacity-0' : 'opacity-100'
                    }`} />
                  </div>
                  <div className={`transition-all duration-500 ${index === activeIndex ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-50'}`}>
                    <h4 className="font-display text-xl text-forest font-semibold mb-1">
                      {step.title}
                    </h4>
                    <p className="font-body text-sm text-forest/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel instructions */}
            <p className="text-center font-body text-xs tracking-widest uppercase text-forest/40 mt-2 sm:hidden">
              ← Desliza para ver más →
            </p>
          </div>
        </div>

        {/* Cata Video */}
        <div className="mt-16 scroll-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <div className="w-10 h-px bg-sage mb-8" />
              <h3 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6 leading-snug">
                Catas y <span className="text-wine">Degustaciones</span>
              </h3>
              <p className="font-body text-forest/70 leading-relaxed mb-4">
                Organizamos catas temáticas donde podés descubrir nuevas etiquetas,
                aprender sobre maridaje y compartir con otros amantes del vino.
              </p>
            </div>
            <div className="lg:order-1 overflow-hidden max-w-sm mx-auto lg:mx-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full max-h-[70vh] object-contain bg-forest-light"
              >
                <source src={videoCata} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
