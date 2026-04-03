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
          {/* Map placeholder */}
          <div className="scroll-hidden overflow-hidden h-[400px] bg-forest-light flex items-center justify-center">
            <div className="text-center">
              <MapPin size={40} className="text-blush/30 mx-auto mb-4" />
              <p className="font-body text-blush/40 text-sm tracking-wider uppercase">
                Google Maps
              </p>
              <p className="font-body text-blush/30 text-xs mt-2">
                Embed del mapa aquí
              </p>
            </div>
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
