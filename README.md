# ZEUS Piscinas

Landing page en Next.js para ZEUS Piscinas.

## Desarrollo

```bash
npm install
npm run dev
```

## Despliegue en Vercel

Este proyecto usa Next.js con `output: 'standalone'`.

Si Vercel muestra un error de Output Directory, verifica en **Project Settings**:
- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Output Directory: **vacío / automático**
- No sobrescribir con `public`

Si existe un override manual de `public`, elimínalo.
