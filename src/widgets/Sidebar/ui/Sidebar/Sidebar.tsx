import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
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
            className={classNames(cls.Sidebar, [className], {
                [cls.collapsed]: isCollapsed,
            })}
        >
            <button onClick={onToggle}>{t('toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.langSwitcher} />
            </div>
        </div>
    );
};

export default Sidebar;
