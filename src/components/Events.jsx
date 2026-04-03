import { Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useImageModal } from '../context/ImageModalContext';
import bandaImg from '../assets/banda-en-vivo-anivesario.jpg';
import patioImg from '../assets/patio-aniversario.jpg';
import tarjetaEspacioImg from '../assets/tarjeta-espacio-wine.jpg';
import videoEventosPrivados from '../assets/video-eventos-privados.mp4';
import videoEventoBurger from '../assets/video-evento-burger.mp4';

const EVENTS = [
  {
    id: 1,
    title: 'Música en Vivo',
    description: 'Bandas y artistas locales que le ponen ritmo a tus noches en Helen Green.',
    image: bandaImg,
    alt: 'Banda en vivo tocando en el aniversario de Helen Green',
  },
  {
    id: 2,
    title: 'Experiencia Patio',
    description: 'Nuestro patio al aire libre, ideal para eventos especiales y reuniones con amigos.',
    image: patioImg,
    alt: 'Patio de Helen Green durante un evento de aniversario',
  },
  {
    id: 3,
    title: 'Espacio Wine',
    description: 'Catas y degustaciones en un espacio íntimo pensado para los amantes del vino.',
    image: tarjetaEspacioImg,
    alt: 'Espacio Wine de Helen Green para catas y eventos privados',
  },
];

export default function Events() {
  const sectionRef = useScrollAnimation();
  const { openImage } = useImageModal();

  return (
    <section
      id="events"
      ref={sectionRef}
      className="section-padding bg-forest"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            Viví Momentos Únicos
          </p>
          <h2 className="section-title text-blush">
            Nuestros Eventos
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Cada noche en Helen Green puede ser especial. Descubrí nuestras propuestas.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {EVENTS.map((event, index) => (
            <div
              key={event.id}
              className="scroll-hidden group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="overflow-hidden mb-6 cursor-pointer"
                onClick={() => openImage({ src: event.image, alt: event.alt })}
              >
                <img
                  src={event.image}
                  alt={event.alt}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="w-8 h-px bg-wine mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-sage" />
              <h3 className="font-display text-xl md:text-2xl text-blush font-semibold mb-2">
                {event.title}
              </h3>
              <p className="font-body text-sm text-blush/60 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Private Events Video Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="scroll-hidden">
            <div className="w-10 h-px bg-sage mb-8" />
            <h3 className="font-display text-2xl md:text-3xl text-blush font-semibold mb-6 leading-snug">
              Eventos Privados
            </h3>
            <p className="font-body text-blush/60 leading-relaxed mb-4">
              ¿Buscás un lugar para tu cumpleaños, reunión corporativa o celebración especial?
              Helen Green ofrece espacios exclusivos que se adaptan a lo que necesitás.
            </p>
            <p className="font-body text-blush/60 leading-relaxed">
              Consultanos por nuestras opciones de menú privado, ambientación y horarios especiales.
            </p>
          </div>

          <div className="scroll-hidden overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-[350px] lg:h-[450px] object-cover"
            >
              <source src={videoEventosPrivados} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>

        {/* Burger Event Video */}
        <div className="mt-16 scroll-hidden">
          <div className="relative overflow-hidden max-w-3xl mx-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-[300px] lg:h-[400px] object-cover"
            >
              <source src={videoEventoBurger} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
          <p className="text-center font-body text-sm text-blush/40 mt-4 tracking-wider">
            Eventos temáticos — Noche de Burgers
          </p>
        </div>
      </div>
    </section>
  );
}
