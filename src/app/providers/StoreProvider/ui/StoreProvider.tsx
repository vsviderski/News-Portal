import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../config/store';

interface IStoreProviderProps {
    children?: ReactNode;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
    children,
}): JSX.Element => <Provider store={store}>{children}</Provider>;
