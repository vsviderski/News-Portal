import { FC, Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage/AboutPage.async';
import { MainPage } from './pages/MainPage/MainPage.async';
import { Link } from 'react-router-dom';
import './styles/index.scss';
import useTheme from './hooks/useTheme';
import { classNames } from './helpers/classNames';

const App: FC = () => {
  const [theme, setTheme] = useTheme();
  console.log('theme: ', theme);

  return (
    <div className={classNames('app', [theme])}>
      <button onClick={setTheme}>Toggle theme</button>
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
