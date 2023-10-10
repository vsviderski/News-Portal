import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { ISidebarItem } from 'widgets/Sidebar/model/items';
import cls from './SidebarItem.module.scss';

interface ISidebarItemProps {
    item: ISidebarItem;
    collapsed: boolean;
}

const SidebarItem: FC<ISidebarItemProps> = ({ item, collapsed }): JSX.Element => {
    const { Icon, path, text } = item;

    return (
        <AppLink
            to={path}
            className={classNames(cls.link, [], {
                [cls.collapsed]: collapsed,
            })}
        >
            <Icon className={cls.icon} />
            <span className={cls.linkText}>{text}</span>
        </AppLink>
    );
};

export default SidebarItem;
