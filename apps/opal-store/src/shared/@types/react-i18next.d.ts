import 'react-i18next';
import * as ko from '../contents/locales/ko';

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'main';
        resources: {
            main: typeof ko.main;
            about: typeof ko.about;
        };
    }
}
