import { FC, Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import useTheme from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames';
import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App: FC = () => {
  const [theme, setTheme] = useTheme();

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
