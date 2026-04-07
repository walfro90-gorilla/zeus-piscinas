import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zeus-piscinas.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ZEUS Piscinas | Construcción de Albercas en Ciudad Juárez, Chihuahua',
    template: '%s | ZEUS Piscinas Ciudad Juárez',
  },
  description:
    'Empresa líder en construcción, remodelación y mantenimiento de albercas y piscinas de lujo en Ciudad Juárez, Chihuahua. Proyectos residenciales y comerciales con acabados premium. Cotiza gratis: +52 656 645 2656.',
  keywords: [
    'piscinas Ciudad Juárez',
    'albercas Ciudad Juárez',
    'construcción piscinas Juárez',
    'construcción albercas Juárez',
    'mantenimiento piscinas Ciudad Juárez',
    'mantenimiento albercas Chihuahua',
    'remodelación albercas Juárez',
    'albercas de lujo Juárez',
    'piscinas de lujo Chihuahua',
    'empresa albercas Juárez',
    'albercas residenciales Juárez',
    'albercas comerciales Juárez',
    'limpieza de albercas Juárez',
    'automatización piscinas Juárez',
    'ZEUS Piscinas',
    'ZEUS Albercas',
    'albercas Chihuahua',
  ],
  authors: [{ name: 'ZEUS Piscinas' }],
  creator: 'ZEUS Piscinas',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'ZEUS Piscinas — Construcción de Albercas en Ciudad Juárez',
    description:
      'Diseño, construcción, remodelación y mantenimiento profesional de albercas y piscinas de lujo. Ingeniería precisa, acabados premium y atención inmediata. Ciudad Juárez, Chihuahua.',
    type: 'website',
    url: siteUrl,
    locale: 'es_MX',
    siteName: 'ZEUS Piscinas',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ZEUS Piscinas — Construcción de albercas de lujo en Ciudad Juárez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZEUS Piscinas — Albercas de lujo en Ciudad Juárez',
    description:
      'Construcción, remodelación y mantenimiento de albercas de lujo en Ciudad Juárez. Cotiza gratis por WhatsApp: +52 656 645 2656.',
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteUrl}/#business`,
    name: 'ZEUS Piscinas',
    alternateName: 'ZEUS Albercas',
    description:
      'Construcción, remodelación y mantenimiento de albercas y piscinas de lujo en Ciudad Juárez, Chihuahua.',
    url: siteUrl,
    telephone: '+52-656-645-2656',
    email: 'ZeusAlbercas@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad Juárez',
      addressRegion: 'Chihuahua',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.6904,
      longitude: -106.4245,
    },
    areaServed: [
      { '@type': 'City', name: 'Ciudad Juárez' },
      { '@type': 'AdministrativeArea', name: 'Chihuahua' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de albercas y piscinas',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construcción de albercas de lujo',
            description: 'Diseño y construcción completa de albercas residenciales y comerciales en Ciudad Juárez con acabados premium.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mantenimiento profesional de albercas',
            description: 'Limpieza, balance químico, revisión de equipos y mantenimiento preventivo para albercas en Ciudad Juárez.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Remodelación de albercas',
            description: 'Modernización y remodelación de albercas existentes con nuevos acabados, iluminación y sistemas eficientes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automatización de piscinas',
            description: 'Instalación de sistemas inteligentes para control de filtración, iluminación y operación de albercas.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
      bestRating: '5',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Ing. Ricardo Salazar' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'ZEUS Piscinas entregó una remodelación impecable. El nivel de detalle y la comunicación técnica fueron excelentes.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Mariana Torres' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Nuestro mantenimiento mensual mejoró muchísimo. El agua se mantiene cristalina y el equipo siempre responde a tiempo.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Carlos Méndez' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Trabajar con ZEUS fue sinónimo de orden, tecnología y acabados de alto nivel. Totalmente recomendados.',
      },
    ],
    sameAs: [
      'https://facebook.com/zeuspiscinas',
      'https://instagram.com/zeuspiscinas',
      'https://tiktok.com/@zeuspiscinas',
    ],
  };

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuánto cuesta construir una alberca en Ciudad Juárez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El costo de construir una alberca en Ciudad Juárez varía según el tamaño, diseño y acabados. En ZEUS Piscinas ofrecemos cotizaciones personalizadas sin costo. Contáctanos por WhatsApp al +52 656 645 2656 para recibir tu propuesta.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo tarda la construcción de una alberca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El tiempo de construcción de una alberca residencial estándar en Ciudad Juárez es de 4 a 8 semanas dependiendo del diseño y las condiciones del terreno. Proyectos con acabados especiales o mayor tamaño pueden requerir más tiempo.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye el servicio de mantenimiento de albercas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nuestro servicio de mantenimiento incluye limpieza del agua y paredes, balance químico, revisión y mantenimiento de bombas y filtros, aspirado de fondo y reporte del estado del equipo. Ofrecemos contratos mensuales en Ciudad Juárez y área metropolitana.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Hacen remodelaciones de albercas antiguas en Juárez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, en ZEUS Piscinas nos especializamos en remodelación de albercas en Ciudad Juárez. Actualizamos acabados, instalamos iluminación LED, modernizamos sistemas de filtración y podemos cambiar la forma o ampliar la alberca existente.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Atienden toda la zona de Ciudad Juárez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, ZEUS Piscinas atiende toda Ciudad Juárez y zona metropolitana, incluyendo zonas residenciales como Campestre, Praderas del Sol, Satélite, Misiones, Quintas del Valle y más.',
        },
      },
    ],
  };

  return (
    <html lang="es-MX">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
        {children}
      </body>
    </html>
  );
}
