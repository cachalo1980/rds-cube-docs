import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'FRIGORIFICO ONETO - Manuales RDS CUBE',
      
      // --- AÑADE ESTA LÍNEA PARA EL FAVICON ---
      // Ruta al icono que aparecerá en la pestaña del navegador.
      // La ruta parte desde la raíz del proyecto.
      favicon: '/src/assets/favicon.svg',
      
      // --- AÑADE ESTA SECCIÓN PARA EL LOGO ---
      // Configuración del logo que aparece en la cabecera.
      logo: {
        // Ruta al archivo del logo.
        src: './src/assets/logo.svg',
        // Texto alternativo para accesibilidad y si la imagen no carga.
        alt: 'Logo RDS CUBE',
        // Si el logo ya incluye el nombre, puedes ocultar el 'title' de texto.
        replacesTitle: false,
      },
      
      locales: {
        root: {
          label: 'Español',
          lang: 'es-ES',
        },
      },
      customCss: [
        './src/styles/custom.css',
      ],
      head: [
        // ... (el resto de tu configuración de 'head' para la fuente)
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap', rel: 'stylesheet' } },
      ],
    }),
  ],
});