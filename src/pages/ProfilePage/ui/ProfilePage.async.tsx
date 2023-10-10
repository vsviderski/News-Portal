import { lazy } from 'react';

const wait = () => new Promise((resolve) => {
    setTimeout(resolve, 2000);
});

export const ProfilePageAsync = lazy(() => wait().then(() => import('./ProfilePage')));
