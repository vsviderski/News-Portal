import { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RoutePaths } from 'shared/routes';

export const Router: FC = (): JSX.Element => {
    const { t, i18n } = useTranslation();

    return (
        <div className="page-wrapper">
            <Suspense fallback={<div>{t('loading')}</div>}>
                <Routes>
                    <Route path={RoutePaths.main} element={<MainPage />} />
                    <Route path={RoutePaths.about} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
