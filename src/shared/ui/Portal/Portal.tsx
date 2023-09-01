import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    children: ReactNode;
    element?: Element;
}

const Portal: FC<IPortalProps> = ({ children, element = document.body }) => createPortal(children, element);

export default Portal;
