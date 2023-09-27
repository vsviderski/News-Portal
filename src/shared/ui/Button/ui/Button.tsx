import { ButtonHTMLAttributes, FC } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    dataTestId?: string;
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

const Button: FC<IButtonProps> = (props): JSX.Element => {
    const {
        dataTestId,
        className,
        children,
        theme = ButtonTheme.CLEAR,
        square,
        size = ButtonSize.M,
        ...restProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: size,
    };

    return (
        <button
            className={classNames(cls.Button, [className], mods)}
            {...restProps}
        >
            {children}
        </button>
    );
};

export default Button;
