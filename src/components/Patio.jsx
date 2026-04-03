import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useImageModal } from '../context/ImageModalContext';
import patioImg from '../assets/patio-aniversario.jpg';
import terrazaImg from '../assets/terraza.jpg';
import videoPatio from '../assets/video-patio.mp4';

export default function Patio() {
  const sectionRef = useScrollAnimation();
  const { openImage } = useImageModal();

  return (
    <section
      id="patio"
      ref={sectionRef}
      className="section-padding bg-forest"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            Al Aire Libre
          </p>
          <h2 className="section-title text-blush">
            Nuestro Patio
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Un espacio al aire libre para disfrutar en las noches más lindas.
          </p>
        </div>

        {/* Video + Photos layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Video */}
          <div className="scroll-hidden overflow-hidden max-w-sm mx-auto lg:mx-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full max-h-[70vh] object-contain bg-forest-light"
            >
              <source src={videoPatio} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          {/* Text + Images */}
          <div className="scroll-hidden">
            <div className="w-10 h-px bg-sage mb-8" />
            <h3 className="font-display text-2xl md:text-3xl text-blush font-semibold mb-6 leading-snug">
              Donde la noche <br />
              <span className="text-sage">se vive afuera</span>
            </h3>
            <p className="font-body text-blush/60 leading-relaxed mb-8">
              El patio de Helen Green es el lugar ideal para eventos al aire libre,
              cenas bajo las estrellas y encuentros con amigos. Un ambiente relajado
              con la mejor gastronomía y atención.
            </p>

            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() => openImage({ src: patioImg, alt: 'Patio de Helen Green durante un evento' })}
              >
                <img
                  src={patioImg}
                  alt="Patio de Helen Green durante un evento"
                  className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() => openImage({ src: terrazaImg, alt: 'Terraza de Helen Green' })}
              >
                <img
                  src={terrazaImg}
                  alt="Terraza de Helen Green"
                  className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
