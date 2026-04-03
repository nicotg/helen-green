import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useImageModal } from '../context/ImageModalContext';
import frenteImg from '../assets/frente.jpg';
import barraImg from '../assets/barra.jpg';
import espacioWineImg from '../assets/espacio-wine.jpg';
import sillasBarraImg from '../assets/sillas-barra.jpg';
import terrazaImg from '../assets/terraza.jpg';
import scaloniImg from '../assets/scaloni.jpg';
import scaloniStaffImg from '../assets/scaloni-staff.jpg';
import horacioImg from '../assets/horacio.jpg';

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
    src: espacioWineImg,
    alt: 'Espacio de vinos y bodega',
    span: '',
  },
  {
    src: terrazaImg,
    alt: 'Terraza al aire libre de Helen Green',
    span: 'md:col-span-2',
  },
  {
    src: sillasBarraImg,
    alt: 'Ambiente en la barra del restaurante',
    span: '',
  },
];

const CELEBRITIES = [
  {
    src: scaloniImg,
    alt: 'Lionel Scaloni visitando Helen Green',
    name: 'Lionel Scaloni',
  },
  {
    src: scaloniStaffImg,
    alt: 'Lionel Scaloni con el staff de Helen Green',
    name: 'Scaloni con nuestro equipo',
  },
  {
    src: horacioImg,
    alt: 'Horacio Pagani visitando Helen Green',
    name: 'Horacio Pagani',
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

        {/* Celebrities Subsection */}
        <div className="mt-20 scroll-hidden">
          <div className="text-center mb-12">
            <div className="w-10 h-px bg-wine mx-auto mb-6" />
            <h3 className="font-display text-2xl md:text-3xl text-forest font-semibold">
              Nos Visitaron
            </h3>
            <p className="font-body text-forest/60 text-sm mt-3 max-w-lg mx-auto">
              Personalidades que eligieron Helen Green para disfrutar de una experiencia única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CELEBRITIES.map((celeb, index) => (
              <div
                key={index}
                className="group relative overflow-hidden cursor-pointer"
                onClick={() => openImage(celeb)}
              >
                <img
                  src={celeb.src}
                  alt={celeb.alt}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent flex items-end">
                  <p className="text-blush font-display text-lg font-semibold p-6">
                    {celeb.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
