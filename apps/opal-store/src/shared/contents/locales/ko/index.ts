import main from './main.json';
import about from './about.json'; // about 파일도 마찬가지로 json 형식으로 작성해주시면 됩니다!

const resource = { main, about };

export type CustomResources = typeof resource;

export const defaultNS = 'main';

export default resource;
