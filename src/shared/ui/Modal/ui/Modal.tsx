import { FC, ReactNode, MouseEvent, useState, useRef, useEffect } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal';
import useTheme from 'shared/lib/hooks/useTheme';
import cls from './Modal.module.scss';

interface IModalProps {
    children: ReactNode;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_TIME = 300;

const Modal: FC<IModalProps> = (props): JSX.Element | null => {
    const { className, children, isOpen, onClose, lazy } = props;

    const [theme] = useTheme();
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
            setIsMounted(true);
        }

        return () => {
            clearTimeout(timeoutRef.current as NodeJS.Timeout);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen]);

    const onKeyDown = (e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    };

    const onCloseHandler = (): void => {
        if (onClose) {
            setIsClosing(true);
            timeoutRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_TIME);
        }
    };

    const onContentClick = (e: MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, [className, theme], mods)}>
                <div
                    className={classNames(cls.overlay)}
                    onClick={onCloseHandler}
                >
                    <div
                        className={classNames(cls.content)}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
