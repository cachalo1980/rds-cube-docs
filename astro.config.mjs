import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      // Título principal del sitio, visible en la cabecera.
      title: 'FRIGORIFICO ONETO - Manuales RDS CUBE',

      // Configuración del logo que aparece junto al título.
      // La ruta apunta a la carpeta 'public', que es la forma correcta
      // para asegurar que los archivos estén disponibles en producción.
      logo: {
        src: './public/images/logo.svg', // Asume que el logo está en 'public/images/logo.svg'
        alt: 'Logo RDS CUBE',
        // 'false' para mostrar tanto el logo como el texto del título.
        replacesTitle: false, 
      },

      // Favicon que aparece en la pestaña del navegador.
      // Apunta a un archivo en la raíz de la carpeta 'public'.
      favicon: '/favicon.svg', // Asume que el favicon está en 'public/favicon.svg'

      // Configuración de idioma para que la interfaz se muestre en español.
      locales: {
        root: {
          label: 'Español',
          lang: 'es-ES',
        },
      },

      // Archivo de estilos CSS personalizados para sobreescribir el tema.
      customCss: [
        './src/styles/custom.css',
      ],

      // Elementos adicionales para la etiqueta <head> del HTML.
      // Usado aquí para importar la fuente 'Montserrat' desde Google Fonts.
      head: [
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