import {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    useState,
    useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface IInputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const Input: FC<IInputProps> = (props): JSX.Element => {
    const { className, type = 'text', onChange, value, ...otherProps } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value);
    };

    return (
        <input
            className={classNames(cls.Input, [className])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
};

export default Input;
