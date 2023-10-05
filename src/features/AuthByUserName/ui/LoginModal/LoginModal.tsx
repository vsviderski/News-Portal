import { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface ILoginModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal: FC<ILoginModalProps> = ({
    isOpen,
    onClose,
}): JSX.Element => (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);
