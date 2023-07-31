import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<IButtonProps> = (props): JSX.Element => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...restProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, [className, , cls[theme]])}
            {...restProps}
        >
            {children}
        </button>
    );
};

export default Button;
