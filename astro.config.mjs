import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      // --- Configuración General del Sitio ---
      title: 'Manuales RDS CUBE',

	  // --- AÑADE ESTA SECCIÓN ---
      locales: {
        root: {
          label: 'Español',
          lang: 'es-ES',
        },
      },
      // --- FIN DE LA SECCIÓN ---

      // --- Personalización de Estilos ---

      // En `customCss` SÓLO deben ir rutas a archivos locales.
      customCss: [
        './src/styles/custom.css',
      ],
      
      // --- AÑADIR ELEMENTOS AL <HEAD> ---
      
      // Esta es la sección correcta para añadir etiquetas <link>, <script>, etc.
      // que se aplicarán en todas las páginas del sitio.
      head: [
        // 1. Pre-conexión con los servidores de Google Fonts (mejora el rendimiento).
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
          },
        },
        // 2. La importación real de la hoja de estilos de la fuente Montserrat.
        {
          tag: 'link',
          attrs: {
            href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
            rel: 'stylesheet',
          },
        },
      ],
    }),
  ],
});