import { CustomResources, defaultNS } from '../shared/contents/locales/ko';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: CustomResources;
    }
}
