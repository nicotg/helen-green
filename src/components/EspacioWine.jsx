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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className="scroll-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="overflow-hidden bg-forest-light mb-3">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-[9/16] object-cover"
                  >
                    <source src={step.video} type="video/mp4" />
                  </video>
                </div>
                <h4 className="font-display text-lg text-forest font-semibold">
                  {step.title}
                </h4>
                <p className="font-body text-xs text-forest/60">
                  {step.description}
                </p>
              </div>
            ))}
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
