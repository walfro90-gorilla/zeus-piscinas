import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ZEUS Piscinas — Construcción y mantenimiento de piscinas de lujo en Ciudad Juárez';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #0d2444 50%, #0a1628 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: 'linear-gradient(90deg, #C9A84C, #F5D07A, #C9A84C)' }} />

        {/* Top: Logo area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            border: '1.5px solid rgba(201,168,76,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '32px',
          }}>
            🔱
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.3em', color: '#5EEAD4', textTransform: 'uppercase' }}>
              ZEUS Piscinas
            </span>
            <span style={{ fontSize: '13px', color: 'rgba(148,163,184,0.8)', letterSpacing: '0.1em' }}>
              Ciudad Juárez, Chihuahua · México
            </span>
          </div>
        </div>

        {/* Center: Main message */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{
            fontSize: '13px', fontWeight: 600, letterSpacing: '0.25em',
            color: '#C9A84C', textTransform: 'uppercase',
          }}>
            Construcción · Remodelación · Mantenimiento
          </div>
          <div style={{
            fontSize: '52px', fontWeight: 800, lineHeight: 1.1,
            color: '#FFFFFF',
          }}>
            Piscinas de lujo{'\n'}que elevan tu propiedad.
          </div>
          <div style={{ fontSize: '20px', color: 'rgba(148,163,184,0.9)', maxWidth: '680px', lineHeight: 1.5 }}>
            Diseño premium, ingeniería precisa y atención inmediata.
            Tu proyecto en las mejores manos de la región.
          </div>
        </div>

        {/* Bottom: Contact */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '12px', color: 'rgba(148,163,184,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>WhatsApp</span>
              <span style={{ fontSize: '18px', fontWeight: 600, color: '#4ADE80' }}>+52 656 645 2656</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '12px', color: 'rgba(148,163,184,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Email</span>
              <span style={{ fontSize: '18px', fontWeight: 600, color: '#5EEAD4' }}>ZeusAlbercas@gmail.com</span>
            </div>
          </div>
          <div style={{
            padding: '14px 28px',
            borderRadius: '100px',
            background: 'linear-gradient(90deg, #C9A84C, #F5D07A)',
            fontSize: '15px', fontWeight: 700,
            color: '#0a1628',
            letterSpacing: '0.05em',
          }}>
            Solicita tu cotización
          </div>
        </div>

        {/* Accent bottom bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #5EEAD4, transparent)' }} />
      </div>
    ),
    { ...size }
  );
}
