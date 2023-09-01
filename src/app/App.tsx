/* eslint-disable i18next/no-literal-string */
import { FC, Suspense, useState } from 'react';
import useTheme from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Router } from './providers/Router';

const App: FC = (): JSX.Element => {
    const [theme] = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <button onClick={() => setIsOpen(true)}>Toggle modal</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>Modal content</Modal>
                <div className='content-page'>
                    <Sidebar />
                    <Router />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
