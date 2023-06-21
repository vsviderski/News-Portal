import { FC } from 'react';
import { Link } from 'react-router-dom';
import useTheme from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames';
import { Router } from './providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

const App: FC = (): JSX.Element => {
  const [theme] = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <Router />
      </div>
    </div>
  );
};

export default App;
