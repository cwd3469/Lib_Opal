import 'react-i18next';
import { CustomResources, defaultNS } from '../shared/contents/locales/ko';

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: CustomResources;
    }
}
