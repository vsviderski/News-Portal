import { FC, Suspense, useEffect, useState } from 'react';
import useTheme from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from 'entities/User';
import { Router } from './providers/Router';
import { useAppDispatch } from './providers/StoreProvider';

const App: FC = (): JSX.Element => {
    const [theme] = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [])
    
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
