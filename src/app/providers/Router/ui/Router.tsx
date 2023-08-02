import { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RoutePaths } from 'shared/routes';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PageLoader } from 'shared/ui/PageLoader';

export const Router: FC = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <div className="page-wrapper">
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path={RoutePaths.main} element={<MainPage />} />
                    <Route path={RoutePaths.about} element={<AboutPage />} />
                    <Route path={RoutePaths.not_found} element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
