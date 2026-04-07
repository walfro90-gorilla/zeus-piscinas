import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZEUS Piscinas | Construcción y mantenimiento de piscinas de lujo en Ciudad Juárez',
  description:
    'ZEUS Piscinas diseña, construye y mantiene piscinas de lujo en Ciudad Juárez, Chihuahua. Experiencia y tecnología nos respaldan para proyectos premium con acabados impecables.',
  openGraph: {
    title: 'ZEUS Piscinas | Servicio profesional premium',
    description:
      'Construcción y mantenimiento de piscinas de lujo en Ciudad Juárez con enfoque tecnológico, precisión y acabados de alto nivel.',
    type: 'website',
    locale: 'es_MX',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ZEUS Piscinas',
    description:
      'Construcción y mantenimiento de piscinas de lujo en Ciudad Juárez, Chihuahua.',
    areaServed: 'Ciudad Juárez, Chihuahua',
    serviceType: ['Construcción de piscinas', 'Mantenimiento de piscinas', 'Remodelación de piscinas'],
  };

  return (
    <html lang="es">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
