import { lazy } from 'react';

const wait = () => new Promise((resolve) => {
    setTimeout(resolve, 2000);
});
export const AboutPageAsync = lazy(() => wait().then(() => import('./AboutPage')));
