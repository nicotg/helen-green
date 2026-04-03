# Actúa como un desarrollador Frontend Senior y Diseñador UX/UI experto. El objetivo final de el proyecto es crear una Landing Page moderna, atractiva y de alto rendimiento para un restaurante.

## Stack tecnológico: 

• React (estructurado en componentes funcionales).

• Tailwind CSS (para todo el estilizado, usando un diseño fully responsive).

• Lucide React o React Icons (para la iconografía).

## Estructura y Arquitectura:
Quiero que el código sea modular. Crea una carpeta src/components y divide la página en secciones claras. Usa etiquetas HTML semánticas (<header>, <section>, <footer>).

## Propuesta de Secciones (Sentite libre de agregar o mejorar ideas):

1. *Hero Section:* Impactante. Debe tener un placeholder para un video de fondo o imagen a pantalla completa (tipo B-roll del restaurante), un título atractivo, un subtítulo y un Call to Action (CTA) principal.

2. *Sobre Nosotros / La Experiencia:* Un espacio para contar la historia del lugar con fotos del ambiente.

3. *Nuestros Eventos:* Una grilla o tarjetas mostrando algunos eventos estrella con fotos, videos y descripciones breves. También se va a mostrar un video que cuenta de que se trata la modalidad de evento privado.

4. *Nuestros Favoritos / Menú Destacado:* Una grilla o tarjetas mostrando 3 o 4 platos estrella con fotos de alta calidad y descripciones breves. No el menú completo, solo para antojar.

5. *Cocktails:* Una grilla o tarjetas mostrando 3 o 4 tragos estrella con fotos(o placeholders) de alta calidad y descripciones breves. No el menú completo, solo para antojar.

6. *Algo Dulce:* Una grilla o tarjetas mostrando algunos postres o meriendas estrella con fotos(o placeholders) de alta calidad y descripciones breves. No el menú completo, solo para antojar.

7. *Galería de Ambiente:* Una sección tipo mosaico con fotos que muestren el lugar con y sin gente(cenas con amigos, el bar, etc.). Va a tener una subsección que muestre personalidades que visitaron el lugar.

8. *Testimonios / Reseñas:* Un par de tarjetas con reseñas de clientes simuladas(Posiblemente se vaya a usar un script de google maps para mostrar las reseñas reales).

9. *Ubicación y Horarios:* Mapa (o un placeholder), dirección, horarios de atención.

10. *Footer:* Redes sociales y links legales.

## Requisito Clave - Sistema de Reservas:
No haremos un sistema de reservas complejo en la web. En su lugar, el CTA principal del Hero y un posible botón flotante (Sticky) que acompañe el scroll deben decir "Reservar Mesa". Estos botones deben redirigir al chat de Instagram del restaurante.
Nota para el código: Usa un enlace con el formato https://ig.me/m/USUARIO_IG (dejá USUARIO_IG como una variable o constante fácil de cambiar). NO USES WHATSAPP. NO REPETIR EXHAUSTIVAMENTE EL BOTÓN "RESERVAR MESA".

## Estilo y Diseño:

### Lenguaje:
Quiero que el sitio esté en español. Y que el tono sea elegante, cálido y cercano. ejemplo: en vez de "RESERVAR MESA" que diga "Reservá tu mesa"

### Fuentes:

(no ser extremadamente estricto con las fuentes, usar las que mejor se adapten)

* Para titulos y encabezados: 
- Vendome Std Regular
- Aviano Sans

* Para cuerpo de texto: 
- Fabrizio Inferior Regular
- Vendome Std Regular


### Paleta de colores:
        forest: {
          DEFAULT: '#18312E',
          light: '#243F3B',
        },
        blush: {
          DEFAULT: '#F1DBDE',
          dark: '#E0C4C8',
        },
        wine: {
          DEFAULT: '#7A3045',
          light: '#943A54',
          dark: '#5E2435',
        },
        sage: {
          DEFAULT: '#A7DA92',
          dark: '#8BC473',
        },
        cream: '#FAF6F0',

### Transiciones suaves en los hovers de los botones y tarjetas.



## Por favor, generá el código de los componentes principales y el App.jsx que los unifica. Para las imágenes y videos, utilizá servicios de placeholders como Unsplash Source o marcadores de posición de Tailwind (ej. bg-gray-200 animate-pulse).

