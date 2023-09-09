import { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import LoginFrom from '../LoginForm/LoginForm';

interface ILoginModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal: FC<ILoginModalProps> = ({ isOpen, onClose }): JSX.Element => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <LoginFrom />
    </Modal>
);
