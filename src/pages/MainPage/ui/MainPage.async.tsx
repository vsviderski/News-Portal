import { lazy } from "react";

export const MainPageAsync = lazy(() => wait().then(() => import('./MainPage')));

const wait = () => new Promise((resolve) => setTimeout(resolve, 2000));