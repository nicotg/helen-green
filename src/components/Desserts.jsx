import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useImageModal } from '../context/ImageModalContext';
import empanadaImg from '../assets/empanada-entrada.jpg';
import salmonImg from '../assets/salmón.jpg';

const DESSERTS = [
  {
    id: 1,
    name: 'Empanadas de Entrada',
    description: 'Empanadas artesanales horneadas, ideales para compartir antes del plato principal.',
    image: empanadaImg,
  },
  {
    id: 2,
    name: 'Salmón Ahumado',
    description: 'Delicado salmón ahumado con crema de eneldo y pan de campo tostado.',
    image: salmonImg,
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
            Para Compartir
          </p>
          <h2 className="section-title text-forest">
            Algo Dulce y Más
          </h2>
          <p className="font-body text-forest/60 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Entradas y bocados que completan la experiencia Helen Green.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {DESSERTS.map((item, index) => (
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
      </div>
    </section>
  );
}
