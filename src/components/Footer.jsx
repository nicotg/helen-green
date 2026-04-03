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
            Reservá tu mesa →
          </a>
        </div>
      </div>
    </footer>
  );
}
