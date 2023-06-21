import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RoutePaths } from 'shared/routes';

export const Router: FC = (): JSX.Element => {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={RoutePaths.main} element={<MainPage />} />
          <Route path={RoutePaths.about} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
