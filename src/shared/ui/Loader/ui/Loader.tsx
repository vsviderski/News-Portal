import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

const Loader: FC = (): JSX.Element => (
    <div className={classNames('lds-spinner')}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Loader;
