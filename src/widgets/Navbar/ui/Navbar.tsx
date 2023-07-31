import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePaths } from 'shared/routes';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, [className])}>
            <div className={cls.links}>
                <AppLink to="/" className={cls.mainLink}>{t('mainPage')}</AppLink>
                <AppLink to={RoutePaths.about}>{t('aboutPage')}</AppLink>
            </div>
        </div>
    );
};
