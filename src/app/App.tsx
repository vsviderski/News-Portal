import { FC, Suspense, useEffect } from 'react';
import { userActions } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import useTheme from 'shared/lib/hooks/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Router } from './providers/Router';

const App: FC = (): JSX.Element => {
    const [theme] = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, []);

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
