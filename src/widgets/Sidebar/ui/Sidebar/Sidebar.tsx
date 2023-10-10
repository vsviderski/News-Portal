import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { sidebarItemsList } from '../../model/items';
import SidebarItem from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

const Sidebar: FC<ISidebarProps> = ({ className }): JSX.Element => {
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
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={isCollapsed}
                    />
                ))}
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
