// =============================================
// Helen Green — Configuración Global
// =============================================

// Instagram — Cambiar USUARIO_IG por el usuario real
export const INSTAGRAM_USER = 'USUARIO_IG';
export const INSTAGRAM_URL = `https://ig.me/m/${INSTAGRAM_USER}`;

// Información del restaurante
export const RESTAURANT = {
  name: 'Helen Green',
  tagline: "Food & Drink's",
  phone: '+54 9 XXXX XXX-XXX',
  email: 'info@helengreen.com.ar',
  address: 'Dirección del Restaurante 1234',
  city: 'Ciudad, Provincia',
  hours: [
    { days: 'Lunes a Jueves', time: '19:00 — 00:00' },
    { days: 'Viernes y Sábado', time: '19:00 — 02:00' },
    { days: 'Domingo', time: '12:00 — 16:00' },
  ],
  socials: {
    instagram: `https://instagram.com/${INSTAGRAM_USER}`,
    facebook: '#',
    whatsapp: '#',
  },
};

// Platos destacados
export const FEATURED_DISHES = [
  {
    id: 1,
    name: 'Tomahawk Steak',
    description: 'Corte premium a la parrilla con papas rústicas y salsa criolla casera.',
    price: null,
    image: 'tomahack',
  },
  {
    id: 2,
    name: 'Paella Helen Green',
    description: 'Nuestra especialidad de la casa con mariscos frescos y arroz azafranado.',
    price: null,
    image: 'paella',
  },
  {
    id: 3,
    name: 'Pasta Fresca del Día',
    description: 'Elaboración artesanal diaria con ingredientes de estación.',
    price: null,
    image: 'pasta',
  },
];

// Testimonios simulados
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Martina López',
    text: 'Un lugar increíble. La combinación del edificio histórico con la cocina moderna es perfecta. Volvemos siempre.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Santiago Ruiz',
    text: 'El tomahawk es una experiencia. El ambiente es único, ideal para ir con amigos o en pareja.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Camila Fernández',
    text: 'Desde la atención hasta los platos, todo es de primera. El lugar más lindo para cenar en la ciudad.',
    rating: 5,
  },
];

// Links de navegación
export const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Menú', href: '#menu' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Ubicación', href: '#location' },
];
