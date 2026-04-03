import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useImageModal } from '../context/ImageModalContext';
import cocktailMojitoImg from '../assets/cocktail-mojito.jpg';
import sirviendoTragoImg from '../assets/sirviendo-trago.jpg';
import tragoImg from '../assets/trago.jpg';

const COCKTAILS = [
  {
    id: 1,
    name: 'Mojito Helen Green',
    description: 'Nuestra versión del clásico, con menta fresca del huerto y un twist cítrico.',
    image: cocktailMojitoImg,
  },
  {
    id: 2,
    name: 'Cóctel de Autor',
    description: 'Creaciones únicas de nuestro bartender, con ingredientes de estación.',
    image: sirviendoTragoImg,
  },
  {
    id: 3,
    name: 'Old Fashioned de la Casa',
    description: 'Bourbon, bitters artesanales y un toque ahumado que marca la diferencia.',
    image: tragoImg,
  },
];

export default function Cocktails() {
  const sectionRef = useScrollAnimation();
  const { openImage } = useImageModal();

  return (
    <section
      id="cocktails"
      ref={sectionRef}
      className="section-padding bg-forest"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            Nuestra Barra
          </p>
          <h2 className="section-title text-blush">
            Cocktails
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Tragos de autor pensados para acompañar cada momento.
          </p>
        </div>

        {/* Cocktails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COCKTAILS.map((cocktail, index) => (
            <div
              key={cocktail.id}
              className="scroll-hidden group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="overflow-hidden mb-6 cursor-pointer"
                onClick={() => openImage({ src: cocktail.image, alt: cocktail.name })}
              >
                <img
                  src={cocktail.image}
                  alt={cocktail.name}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="w-8 h-px bg-wine mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-sage" />
              <h3 className="font-display text-xl md:text-2xl text-blush font-semibold mb-2">
                {cocktail.name}
              </h3>
              <p className="font-body text-sm text-blush/60 leading-relaxed">
                {cocktail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
