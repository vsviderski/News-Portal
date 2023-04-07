import { lazy } from "react";

export const MainPage = lazy(() => wait().then(() => import('./MainPage')));

const wait = () => new Promise((resolve) => setTimeout(resolve, 2000));