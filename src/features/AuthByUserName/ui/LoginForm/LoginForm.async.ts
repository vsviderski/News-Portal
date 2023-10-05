import { lazy } from 'react';

const wait = () =>
    new Promise((res) => {
        setTimeout(res, 2000);
    });

export const LoginFormAsync = lazy(() => 
    wait().then(() => import('./LoginForm'))
);
