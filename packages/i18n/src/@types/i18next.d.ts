import { CustomResources, defaultNS } from '../resource';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: CustomResources;
    }
}
