import { FC, ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore, store } from '../config/store';

interface ITestStoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const TestStoreProvider: FC<ITestStoreProviderProps> = ({
    children,
    initialState,
}): JSX.Element => {
    const store = createReduxStore(initialState as StateSchema);

    return <Provider store={store}>{children}</Provider>;
};
