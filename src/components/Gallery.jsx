import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useImageModal } from '../context/ImageModalContext';
import frenteImg from '../assets/frente.jpg';
import tomahackImg from '../assets/tomahack.jpg';
import barraImg from '../assets/barra.jpg';
import tragoImg from '../assets/trago.jpg';

// Mix of real images and some placeholders where needed
const GALLERY_IMAGES = [
  {
    src: frenteImg,
    alt: 'Fachada del restaurante Helen Green de noche',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: barraImg,
    alt: 'Nuestra barra de tragos gourmet',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&q=80',
    alt: 'Interior de restaurante elegante',
    span: '',
  },
  {
    src: tomahackImg,
    alt: 'Tomahawk steak con guarnición',
    span: '',
  },
  {
    src: tragoImg,
    alt: 'Cócteles de autor en Helen Green',
    span: 'md:col-span-2',
  },
];

export default function Gallery() {
  const sectionRef = useScrollAnimation();
  const { openImage } = useImageModal();

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-wine mb-4">
            El Lugar
          </p>
          <h2 className="section-title text-forest">
            Viví la Experiencia
          </h2>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`scroll-hidden group relative overflow-hidden ${image.span} cursor-pointer`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-full min-h-[250px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-all duration-500 flex items-end">
                <p className="text-blush text-sm font-body tracking-wider p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
