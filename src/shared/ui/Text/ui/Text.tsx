import { FC, ReactNode } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

interface ITextProps {
    title?: string;
    className?: string;
    text?: string;
    theme?: TextTheme;
}

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

const Text: FC<ITextProps> = (props): JSX.Element => {
    const { className, title, text, theme = TextTheme.PRIMARY } = props;

    return (
        <div
            className={classNames(cls.Text, [className], {
                [cls[theme]]: true,
            })}
        >
            {title && <p className={classNames(cls.title)}>{title}</p>}
            {text && <p className={classNames(cls.text)}>{text}</p>}
        </div>
    );
};

export default Text;
