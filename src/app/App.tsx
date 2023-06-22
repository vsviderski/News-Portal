import { FC, Suspense } from 'react';
import useTheme from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames';
import { Router } from './providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
import { useTranslation } from 'react-i18next';

const TestComp = () => {
  const {i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <>
      <div>
        <button onClick={toggle}>Switch language</button>
      </div>
    </>
  );
};

const App: FC = (): JSX.Element => {
  const [theme] = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback="">
        <TestComp />
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
