import { MapPin, Phone, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { RESTAURANT } from '../constants/config';

export default function Location() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="location"
      ref={sectionRef}
      className="section-padding bg-blush"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-wine mb-4">
            Dónde Encontrarnos
          </p>
          <h2 className="section-title text-forest">
            Ubicación y Horarios
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map */}
          <div className="scroll-hidden overflow-hidden h-[400px] w-full rounded-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.632627117515!2d-61.1722276!3d-33.0398079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b62d0059481fe1%3A0x55496fb92487346c!2sHelen%20Green!5e0!3m2!1ses-419!2sar!4v1775687923509!5m2!1ses-419!2sar"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info */}
          <div className="scroll-hidden flex flex-col justify-center">
            {/* Address */}
            <div className="flex gap-4 mb-8">
              <MapPin size={20} className="text-wine flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-1">
                  Dirección
                </h3>
                <p className="font-body text-forest/70 text-sm">
                  {RESTAURANT.address}
                </p>
                <p className="font-body text-forest/70 text-sm">
                  {RESTAURANT.city}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 mb-8">
              <Phone size={20} className="text-wine flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-1">
                  Teléfono
                </h3>
                <p className="font-body text-forest/70 text-sm">
                  {RESTAURANT.phone}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock size={20} className="text-wine flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-3">
                  Horarios
                </h3>
                <div className="space-y-2">
                  {RESTAURANT.hours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex gap-4 font-body text-sm text-forest/70"
                    >
                      <span className="min-w-[160px] font-medium text-forest">
                        {schedule.days}
                      </span>
                      <span>{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
