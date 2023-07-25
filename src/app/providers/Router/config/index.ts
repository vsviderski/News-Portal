import { AboutPage } from 'pages/AboutPage';
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AppRoutes, RoutePaths } from 'shared/routes';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: MainPage,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: AboutPage,
    },
};
