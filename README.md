# Video Portada - Next.js

Proyecto migrado de HTML/CSS/JS a Next.js + TypeScript + Tailwind CSS.

## Características

- ✅ **Header transparente** con efecto de scroll y backdrop blur
- ✅ **Menú móvil** responsive con animaciones
- ✅ **Video hero** de pantalla completa con soporte para:
  - Videos MP4 locales
  - Videos de Vimeo embebidos
- ✅ **Efecto parallax** configurable
- ✅ **Menú de configuración flotante** para personalizar la experiencia:
  - Mostrar/ocultar título en el video
  - Video completo o reducido (50vh)
  - Activar/desactivar parallax
  - Cambiar entre MP4 local y Vimeo
- ✅ **Secciones de contenido** con diseño responsive
- ✅ **Optimizado para móviles** y tablets
- ✅ **Font Poppins** de Google Fonts
- ✅ **Font Awesome** para iconos

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build para producción

```bash
npm run build
npm start
```

## Estructura del proyecto

```
video-portada-nextjs/
├── app/
│   ├── layout.tsx          # Layout principal con Font Awesome
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Componente de header con navegación
│   ├── VideoHero.tsx       # Componente de video hero
│   ├── ConfigMenu.tsx      # Menú de configuración flotante
│   └── ContentSections.tsx # Secciones de contenido
└── public/
    ├── Centhylon-Logo_Vectorial.svg
    ├── Logo_versió_text2.svg
    └── fragrance transition_3.mp4
```

## Funcionalidades

### Header
- Transparente con backdrop blur
- Se vuelve fijo al hacer scroll
- Menú móvil animado
- Buscador integrado
- Enlaces de sesión y cesta

### Video Hero
- Reproducción automática en loop
- Soporte para videos MP4 locales
- Soporte para videos de Vimeo
- Efecto parallax al hacer scroll
- Indicador de scroll animado
- Título opcional con overlay

### Configuración
- Panel flotante en la esquina inferior izquierda
- Todas las opciones se aplican en tiempo real
- Interfaz intuitiva con checkboxes personalizados

## Tecnologías

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first
- **Font Awesome 6** - Iconos
- **Google Fonts (Poppins)** - Tipografía

## Personalización

### Cambiar el video MP4
Reemplaza el archivo `public/fragrance transition_3.mp4` con tu video.

### Cambiar el video de Vimeo
Usa el menú de configuración flotante y pega la URL del video de Vimeo.

### Modificar colores
Edita las variables CSS en `app/globals.css`:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #666;
  --hover-color: #1a252f;
  --title-color: #305590;
}
```

### Añadir más secciones
Edita el componente `components/ContentSections.tsx` para añadir más secciones.

## Optimizaciones

- Preconexiones a dominios de Vimeo
- Lazy loading de imágenes con Next.js Image
- Optimización de animaciones con requestAnimationFrame
- Responsive design optimizado para todos los dispositivos
- Reducción de motion para usuarios con preferencias de accesibilidad

## Licencia

MIT