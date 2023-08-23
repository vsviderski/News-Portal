import { FC, Suspense } from 'react';
import useTheme from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Router } from './providers/Router';
import './styles/index.scss';

const App: FC = (): JSX.Element => {
    const [theme] = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback="">
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
