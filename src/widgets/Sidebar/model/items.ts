import { t } from 'i18next';
import { SVGProps, VFC } from 'react';
import { RoutePaths } from 'shared/routes';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/list.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';


export interface ISidebarItem {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: ISidebarItem[] = [
    {
        path: RoutePaths.main,
        text: 'Main page',
        Icon: MainIcon,
    },
    {
        path: RoutePaths.about,
        text: 'About page',
        Icon: AboutIcon,
    },
    {
        path: RoutePaths.profile,
        text: 'Profile page',
        Icon: ProfileIcon,
    },
];
