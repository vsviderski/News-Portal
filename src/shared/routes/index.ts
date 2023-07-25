export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};
