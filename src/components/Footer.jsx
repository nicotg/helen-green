import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { RESTAURANT, NAV_LINKS, INSTAGRAM_URL } from '../constants/config';

// Inline SVG icons for branded social media (lucide-react doesn't include branded icons)
function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const sectionRef = useScrollAnimation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer ref={sectionRef} className="bg-forest border-t border-blush/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="scroll-hidden">
            <h3 className="font-display text-2xl text-blush font-semibold mb-2">
              {RESTAURANT.name}
            </h3>
            <p className="font-body text-sm text-blush/40 tracking-wider">
              {RESTAURANT.tagline}
            </p>
            <div className="w-8 h-px bg-wine mt-6" />
          </div>

          {/* Navigation */}
          <div className="scroll-hidden">
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-blush/50 mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-body text-sm text-blush/60 hover:text-blush transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="scroll-hidden">
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-blush/50 mb-6">
              Seguinos
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href={RESTAURANT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-blush/20 flex items-center justify-center text-blush/60 hover:text-blush hover:border-blush/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={RESTAURANT.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-blush/20 flex items-center justify-center text-blush/60 hover:text-blush hover:border-blush/40 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={RESTAURANT.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-blush/20 flex items-center justify-center text-blush/60 hover:text-blush hover:border-blush/40 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
            <p className="font-body text-sm text-blush/40">
              {RESTAURANT.email}
            </p>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-blush/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-blush/30">
            © {new Date().getFullYear()} {RESTAURANT.name}. Todos los derechos reservados.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-wine hover:text-wine-light transition-colors duration-300 tracking-wider uppercase"
          >
            Reservar Mesa →
          </a>
        </div>
      </div>
    </footer>
  );
}
