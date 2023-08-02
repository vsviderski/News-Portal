import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/PageLoader copy/ui/Loader';
import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

const PageLoader: FC<IPageLoaderProps> = ({ className }): JSX.Element => (
    <div className={classNames(cls.PageLoader, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
