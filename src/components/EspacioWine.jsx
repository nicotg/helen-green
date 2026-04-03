import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useImageModal } from '../context/ImageModalContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import espacioWineImg from '../assets/espacio-wine.jpg';
import videoPaso1 from '../assets/espacio-wine-paso-1.mp4';
import videoPaso2 from '../assets/espacio-wine-paso-2.mp4';
import videoPaso3 from '../assets/espacio-wine-paso-3.mp4';
import videoPaso4 from '../assets/espacio-wine-paso-4.mp4';
import videoPaso5 from '../assets/espacio-wine-paso-5.mp4';
import videoCata from '../assets/video-cata-picapiedras.mp4';

const STEPS = [
  { video: videoPaso1, title: 'Paso 1' },
  { video: videoPaso2, title: 'Paso 2' },
  { video: videoPaso3, title: 'Paso 3' },
  { video: videoPaso4, title: 'Paso 4' },
  { video: videoPaso5, title: 'Paso 5' },
];

export default function EspacioWine() {
  const sectionRef = useScrollAnimation();
  const { openImage } = useImageModal();
  const [currentStep, setCurrentStep] = useState(0);

  // Referencia para capturar todos los videos del carrusel
  const videoRefs = useRef([]);

  // Lógica para manejar la reproducción y pausa de los videos
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentStep) {
          video.currentTime = 0; // Reinicia al principio
          video.play().catch(error => {
            console.log("Reproducción automática prevenida:", error);
          });
        } else {
          video.pause(); // Pausa los videos que no están centrados
        }
      }
    });
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  return (
    <section
      id="espacio-wine"
      ref={sectionRef}
      className="section-padding bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
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

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div
            className="scroll-hidden overflow-hidden cursor-pointer rounded-lg shadow-sm"
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

        {/* Coverflow Carousel */}
        <div className="scroll-hidden relative w-full py-10">
          <div className="text-center mb-16">
            <div className="w-10 h-px bg-wine mx-auto mb-6" />
            <h3 className="font-display text-2xl md:text-3xl text-forest font-semibold">
              La Experiencia Paso a Paso
            </h3>
          </div>

          {/* Degradados laterales */}
          <div className="absolute inset-y-0 left-0 w-1/4 md:w-1/3 bg-gradient-to-r from-cream to-transparent z-20 pointer-events-none mt-20" />
          <div className="absolute inset-y-0 right-0 w-1/4 md:w-1/3 bg-gradient-to-l from-cream to-transparent z-20 pointer-events-none mt-20" />

          {/* Carrusel */}
          <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
            {STEPS.map((step, index) => {
              let positionClasses = "opacity-0 scale-50 pointer-events-none z-0";

              if (index === currentStep) {
                positionClasses = "opacity-100 scale-100 z-30 translate-x-0";
              } else if (index === currentStep - 1) {
                positionClasses = "opacity-60 scale-[0.8] z-10 -translate-x-[80%] md:-translate-x-[115%] cursor-pointer hover:opacity-80";
              } else if (index === currentStep + 1) {
                positionClasses = "opacity-60 scale-[0.8] z-10 translate-x-[80%] md:translate-x-[115%] cursor-pointer hover:opacity-80";
              } else if (index < currentStep - 1) {
                positionClasses = "opacity-0 scale-50 -translate-x-[150%] z-0";
              } else if (index > currentStep + 1) {
                positionClasses = "opacity-0 scale-50 translate-x-[150%] z-0";
              }

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-full max-w-[260px] md:max-w-[320px] flex flex-col items-center ${positionClasses}`}
                  onClick={() => {
                    if (index === currentStep) {
                      openImage({ src: step.video, alt: `${step.title}`, type: 'video' });
                    } else {
                      setCurrentStep(index);
                    }
                  }}
                >
                  <div className={`relative overflow-hidden bg-forest-light rounded-xl w-full aspect-[4/5] md:aspect-[3/4] transition-shadow duration-700 ${index === currentStep ? 'shadow-xl' : 'shadow-md'}`}>
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={step.video} type="video/mp4" />
                    </video>
                    {index !== currentStep && (
                      <div className="absolute inset-0 bg-black/30 pointer-events-none transition-opacity duration-700" />
                    )}
                  </div>

                  <div className={`mt-6 text-center transition-all duration-500 delay-100 w-full ${index === currentStep ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    <h4 className="font-display text-xl md:text-2xl text-forest font-semibold">
                      {step.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flechas de Navegación */}
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`absolute left-0 md:left-2 top-[55%] md:top-1/2 -translate-y-1/2 z-40 p-2 text-wine/50 hover:text-wine transition-all duration-300
            ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-pointer'}`}
          >
            <ChevronLeft size={42} strokeWidth={1} />
          </button>

          <button
            onClick={nextStep}
            disabled={currentStep === STEPS.length - 1}
            className={`absolute right-0 md:right-2 top-[55%] md:top-1/2 -translate-y-1/2 z-40 p-2 text-wine/50 hover:text-wine transition-all duration-300
            ${currentStep === STEPS.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-pointer'}`}
          >
            <ChevronRight size={42} strokeWidth={1} />
          </button>
        </div>

        {/* Footer Video */}
        <div className="mt-16 scroll-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <div className="w-10 h-px bg-sage mb-8" />
              <h3 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6 leading-snug">
                Catas y <span className="text-wine">Degustaciones</span>
              </h3>
              <p className="font-body text-forest/70 leading-relaxed">
                Organizamos catas temáticas donde podés descubrir nuevas etiquetas,
                aprender sobre maridaje y compartir con otros amantes del vino.
              </p>
            </div>
            <div className="lg:order-1 overflow-hidden max-w-sm mx-auto lg:mx-0 rounded-lg shadow-sm">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full max-h-[70vh] object-contain bg-forest-light"
              >
                <source src={videoCata} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}