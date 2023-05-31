import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // resources: {
    //   es: {
    //     translation: {
    //       tituloexp: 'Experiencia laboral',
    //       biografia: 'Hola! Soy Nico. Diseñador Gráfico y desarrollador front-end.\nHace más de 12 años que trabajo en equipos de diseño orientados a marketing y al desarrollo de proyectos, así como también a la creación de micrositios y landings en HTML5, CSS3 y JS. Me especializo en diseño gráfico, UX/UI, email marketing y desarrollo front-end. Trabajé y aprendí de grandes profesionales en algunas de las empresas y agencias digitales más grandes de Estados Unidos y Latinoamérica, desarrollando campañas de marketing, branding, emails, interfaces de aplicaciones mobile y sitios web.'
    //       // here we will place our translations...
    //     }
    //   },
    //   en: {
    //     translation: {
    //       tituloexp: 'Work experience',
    //       biografia: 'Hola! Soy Nico. Diseñador Gráfico y desarrollador front-end.\nHace más de 12 años que trabajo en equipos de diseño orientados a marketing y al desarrollo de proyectos, así como también a la creación de micrositios y landings en HTML5, CSS3 y JS. Me especializo en diseño gráfico, UX/UI, email marketing y desarrollo front-end. Trabajé y aprendí de grandes profesionales en algunas de las empresas y agencias digitales más grandes de Estados Unidos y Latinoamérica, desarrollando campañas de marketing, branding, emails, interfaces de aplicaciones mobile y sitios web.'
    //       // here we will place our translations...
    //     }
    //   }
    // }
  });
export default i18n;