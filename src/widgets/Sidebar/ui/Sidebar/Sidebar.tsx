import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePaths } from 'shared/routes';
import AboutIcon from 'shared/assets/icons/home.svg';
import MainIcon from 'shared/assets/icons/list.svg';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

const Sidebar: FC<ISidebarProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const onToggle = (): void => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, [className], {
                [cls.collapsed]: isCollapsed,
            })}
        >
            <Button
                data-testid="toggle-icon"
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                size={ButtonSize.L}
                square
            >
                {isCollapsed ? '>' : '<'}
            </Button>
            <div className={cls.links}>
                <AppLink to="/" className={cls.link}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.linkText}>{t('mainPage')}</span>
                </AppLink>
                <AppLink to={RoutePaths.about} className={cls.link}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.linkText}>{t('aboutPage')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.langSwitcher}
                    isShort={isCollapsed}
                />
            </div>
        </div>
    );
};

export default Sidebar;
