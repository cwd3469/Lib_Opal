import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import ko, { defaultNS } from './ko';

const resources = {
    'en-US': en,
    'ko-KR': ko,
};

i18n.use(initReactI18next).init({
    lng: 'ko-KR', // 초기 설정 언어
    debug: true,
    resources,
    defaultNS,
    // fallbackLng: {
    //     'en-US': ['en-US'], // 한국어 불러오는 것이 실패했을 경우 영문을 써라 라는 말입니다.
    //     default: ['ko-KR'],
    // },
    // interpolation: {
    //     escapeValue: false,
    // },
});

export default i18n;
