import { lazy } from 'react';

export const AboutPageAsync = lazy(() => wait().then(() => import('./AboutPage')));

const wait = () => new Promise((resolve) => setTimeout(resolve, 2000));
