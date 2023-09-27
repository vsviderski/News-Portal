import { FC, ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    children: ReactNode;
    element?: Element;
}

const Portal: FC<IPortalProps> = ({ children, element }): ReactPortal => {
    const root = element || document.getElementById('root')!;
    return createPortal(children, root);
};

export default Portal;
