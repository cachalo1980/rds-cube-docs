import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      // Título principal del sitio web. Aparece en la cabecera.
      title: 'Manuales RDS CUBE',

      // Configuración de internacionalización (i18n).
      // Al definir 'es-ES' como la raíz, Starlight usará sus
      // traducciones al español para la interfaz.
      locales: {
        root: {
          label: 'Español',
          lang: 'es-ES',
        },
      },

      // Carga de archivos CSS personalizados para sobreescribir los estilos.
      customCss: [
        './src/styles/custom.css',
      ],

      // Elementos para añadir a la etiqueta <head> de todas las páginas.
      // Aquí importamos la fuente "Inter" que usaremos en nuestro CSS.
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
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap',
            rel: 'stylesheet',
          },
        },
      ],

      // Opcional: Puedes añadir un logo aquí si lo tienes.
      // logo: {
      //   src: './src/assets/logo.svg',
      // },

    }),
  ],
});