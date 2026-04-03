import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FEATURED_DISHES } from '../constants/config';
import tomahackImg from '../assets/tomahack.jpg';

// Placeholder images from Unsplash for dishes we don't have photos of
const DISH_IMAGES = {
  tomahack: tomahackImg,
  'placeholder-1':
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&q=80',
  'placeholder-2':
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&h=400&fit=crop&q=80',
};

export default function FeaturedMenu() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="section-padding bg-forest"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            Lo Mejor de la Casa
          </p>
          <h2 className="section-title text-blush">
            Nuestros Favoritos
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Los platos que nos definen. Sabores únicos pensados para compartir.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_DISHES.map((dish, index) => (
            <div
              key={dish.id}
              className="scroll-hidden group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="overflow-hidden mb-6">
                <img
                  src={DISH_IMAGES[dish.image]}
                  alt={dish.name}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="w-8 h-px bg-wine mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-sage" />
              <h3 className="font-display text-xl md:text-2xl text-blush font-semibold mb-2">
                {dish.name}
              </h3>
              <p className="font-body text-sm text-blush/60 leading-relaxed">
                {dish.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
