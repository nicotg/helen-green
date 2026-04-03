import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useImageModal } from '../context/ImageModalContext';
import frenteHistoriaImg from '../assets/frente-historia.jpg';
import videoHistoria from '../assets/video-historia.mp4';

export default function About() {
  const sectionRef = useScrollAnimation();
  const { openImage } = useImageModal();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-wine mb-4">
            Nuestra Historia
          </p>
          <h2 className="section-title text-forest">
            Más que un restaurante
          </h2>
        </div>

        {/* First row — Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div 
            className="scroll-hidden overflow-hidden cursor-pointer"
            onClick={() => openImage({ src: frenteHistoriaImg, alt: 'Foto histórica del edificio Helen Green' })}
          >
            <img
              src={frenteHistoriaImg}
              alt="Foto histórica del edificio Helen Green comparada con la actualidad"
              className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="scroll-hidden">
            <div className="w-10 h-px bg-wine mb-8" />
            <h3 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6 leading-snug">
              Un edificio con alma, <br />
              <span className="text-wine">una mesa con historia</span>
            </h3>
            <p className="font-body text-forest/70 leading-relaxed mb-4">
              En el corazón de la ciudad, un edificio centenario cobra nueva vida.
              Helen Green nace de la pasión por rescatar la arquitectura histórica
              y transformarla en un espacio donde la gastronomía, el diseño y la
              calidez se encuentran.
            </p>
            <p className="font-body text-forest/70 leading-relaxed">
              Cada rincón cuenta una historia. Cada plato es una invitación a quedarse.
              Te esperamos para que vivas la experiencia de cenar en un lugar único.
            </p>
          </div>
        </div>

        {/* Second row — Text + Image (reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="lg:order-2 overflow-hidden bg-forest/10 relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-[400px] lg:h-[650px] object-cover"
            >
              <source src={videoHistoria} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          <div className="scroll-hidden lg:order-1">
            <div className="w-10 h-px bg-sage mb-8" />
            <h3 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6 leading-snug">
              Donde cada detalle <br />
              <span className="text-wine">importa</span>
            </h3>
            <p className="font-body text-forest/70 leading-relaxed mb-4">
              Sin dudas, esta historia inspirada en la hermosa casa que nos alberga y el respeto por sus raíces, comenzó mucho antes.
            </p>
            <p className="font-body text-forest/70 leading-relaxed mb-4">
              La pasión por la buena gastronomía y una sincera hospitalidad fueron el puntapié inicial.
              El sacrificio diario y el compromiso con hacer las cosas bien nuestros pilares fundamentales.
              Somos amantes del buen gusto, cuidamos a los que más queremos y buscamos estar en todos los detalles para que así lo sientan.
              Con cada visita a Helen, esta historia se sigue escribiendo. Gracias por ser parte!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
