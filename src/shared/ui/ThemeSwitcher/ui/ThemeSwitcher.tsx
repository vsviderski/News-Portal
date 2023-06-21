import { FC } from 'react';
import cls from './ThemeSwitcher.module.scss';
import useTheme from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button';

interface IThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }): JSX.Element => {
  const [theme, setTheme] = useTheme();

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, [className])}
      onClick={setTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
