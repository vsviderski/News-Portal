/* eslint-disable i18next/no-literal-string */
import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const onOpenModal = (): void => {
        setIsOpen(true);
    };

    const onCloseModal = (): void => {
        setIsOpen(false);
    };

    return (
        <div className={classNames(cls.navbar, [className])}>
            <Button onClick={onOpenModal} theme={ButtonTheme.BACKGROUND}>
                {t('sign in')}
            </Button>
            <LoginModal isOpen={isOpen} onClose={onCloseModal}>
                Modal content
            </LoginModal>
        </div>
    );
};
