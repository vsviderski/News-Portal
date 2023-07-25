import { FC } from 'react';
import { AppLink } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }): JSX.Element => (
    <div className={classNames(cls.navbar, [className])}>
        <div className={cls.links}>
            <AppLink to="/" className={cls.mainLink}>Main page</AppLink>
            <AppLink to="/about">About page</AppLink>
        </div>
    </div>
);
