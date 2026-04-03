import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TESTIMONIALS } from '../constants/config';

export default function Testimonials() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-forest"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-hidden">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            Lo Que Dicen
          </p>
          <h2 className="section-title text-blush">
            Nuestros Visitantes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="scroll-hidden bg-forest-light border border-blush/10 p-8 transition-all duration-300 hover:border-blush/20"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-sage fill-sage"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-blush/80 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="w-8 h-px bg-wine mb-4" />
              <p className="font-display text-blush text-base font-medium">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
