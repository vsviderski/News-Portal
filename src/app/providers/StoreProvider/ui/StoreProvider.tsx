import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }): JSX.Element => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>{children}</Provider>
    );
};

export default StoreProvider;
