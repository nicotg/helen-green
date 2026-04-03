import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useImageModal } from '../context/ImageModalContext';
import videoCata from '../assets/video-cata-picapiedras.mp4';

const SWEETS = [
  {
    id: 1,
    name: 'Torta del Día',
    description: 'Elaboración artesanal diaria, el cierre perfecto para tu cena.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Merienda Helen Green',
    description: 'Café de especialidad, scones caseros y dulzuras para compartir.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Tabla de Quesos & Dulces',
    description: 'Selección de quesos artesanales con frutos secos, miel y mermeladas caseras.',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&h=400&fit=crop&q=80',
  },
];

export default function Desserts() {
  const sectionRef = useScrollAnimation();
  const { openImage } = useImageModal();

  return (
    <section
      id="desserts"
      ref={sectionRef}
      className="section-padding bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-wine mb-4">
            Para Endulzar
          </p>
          <h2 className="section-title text-forest">
            Algo Dulce
          </h2>
          <p className="font-body text-forest/60 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Postres, meriendas y dulzuras que completan la experiencia Helen Green.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SWEETS.map((item, index) => (
            <div
              key={item.id}
              className="scroll-hidden group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="overflow-hidden mb-6 cursor-pointer"
                onClick={() => openImage({ src: item.image, alt: item.name })}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="w-8 h-px bg-wine mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-sage" />
              <h3 className="font-display text-xl md:text-2xl text-forest font-semibold mb-2">
                {item.name}
              </h3>
              <p className="font-body text-sm text-forest/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Merienda Video */}
        <div className="scroll-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="overflow-hidden max-w-sm mx-auto lg:mx-0">
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
            <div>
              <div className="w-10 h-px bg-wine mb-8" />
              <h3 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6 leading-snug">
                La hora de <span className="text-wine">la merienda</span>
              </h3>
              <p className="font-body text-forest/70 leading-relaxed mb-4">
                No todo es cena en Helen Green. Nuestra propuesta de merienda incluye
                café de especialidad, pastelería artesanal y un ambiente pensado para
                disfrutar de la tarde.
              </p>
              <p className="font-body text-forest/70 leading-relaxed">
                Vení a descubrir una experiencia diferente en cada visita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
