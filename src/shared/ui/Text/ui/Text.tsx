import { FC, ReactNode } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

interface ITextProps {
    children: ReactNode;
    className?: string;
}

const Text: FC<ITextProps> = (props): JSX.Element | null => {
    const { className, children } = props;

    return (
            <div className={classNames(cls.Text, [className])}>
                <div
                    className={classNames(cls.overlay)}
                >
                    <div
                        className={classNames(cls.content)}
                    >
                        {children}
                    </div>
                </div>
            </div>
    );
};

export default Text;
