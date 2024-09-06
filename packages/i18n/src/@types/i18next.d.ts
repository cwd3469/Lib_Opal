import { CustomResources, defaultNS } from '../locales/resource';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: CustomResources;
    }
}
