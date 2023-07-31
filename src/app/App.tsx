import { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import useTheme from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Router } from './providers/Router';
import './styles/index.scss';

const SwitchLanguage = () => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div>
            <button onClick={toggle}>{t('switchLanguage')}</button>
        </div>
    );
};

const App: FC = (): JSX.Element => {
    const [theme] = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback="">
                <SwitchLanguage />
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <Router />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
