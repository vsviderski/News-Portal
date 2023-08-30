import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }): JSX.Element => (
    <div className={classNames(cls.navbar, [className])} />
);
