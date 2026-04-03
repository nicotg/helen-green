import { useScrollAnimation } from '../hooks/useScrollAnimation';
import frenteHistoriaImg from '../assets/frente-historia.jpg';
import horacioImg from '../assets/horacio.jpg';

export default function About() {
  const sectionRef = useScrollAnimation();

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
          <div className="scroll-hidden overflow-hidden">
            <img
              src={frenteHistoriaImg}
              alt="Foto histórica del edificio Helen Green comparada con la actualidad"
              className="w-full h-[400px] lg:h-[500px] object-cover"
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
          <div className="scroll-hidden lg:order-2 overflow-hidden">
            <img
              src={horacioImg}
              alt="Persona firmando un plato en el restaurante Helen Green"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>

          <div className="scroll-hidden lg:order-1">
            <div className="w-10 h-px bg-sage mb-8" />
            <h3 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6 leading-snug">
              Donde cada detalle <br />
              <span className="text-wine">importa</span>
            </h3>
            <p className="font-body text-forest/70 leading-relaxed mb-4">
              Desde la selección de ingredientes hasta la presentación de cada plato,
              cuidamos cada aspecto de tu visita. Nuestro equipo trabaja con dedicación
              para que cada momento en Helen Green sea memorable.
            </p>
            <p className="font-body text-forest/70 leading-relaxed">
              Un lugar pensado para disfrutar: con amigos, en pareja o en familia.
              La mesa está servida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
