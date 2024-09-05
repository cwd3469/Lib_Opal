import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en';
import ko from './locales/ko';
import { defaultNS } from './resource';

const resources = {
    'en-US': en,
    'ko-KR': ko,
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'ko-KR',
        debug: true,
        resources,
        defaultNS,
        detection: { order: ['path', 'navigator'] },
        fallbackLng: {
            'en-US': ['en-US'],
            default: ['ko-KR'],
        },
    });

export default i18n;
