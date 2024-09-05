import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import * as resources from './locales';
import { defaultNS } from './locales/resource';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'ko',
        debug: true,
        resources,
        defaultNS,
        detection: { order: ['path', 'navigator'] },
        fallbackLng: {
            en: ['en'],
            default: ['ko'],
        },
    });

export default i18n;
