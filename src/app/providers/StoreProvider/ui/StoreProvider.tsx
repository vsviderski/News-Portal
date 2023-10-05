import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface IStoreProviderProps {
    initialState?: DeepPartial<StateSchema>;
    children?: ReactNode;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
    children,
    initialState,
    asyncReducers,
}): JSX.Element => {
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>
    );

    return <Provider store={store}>{children}</Provider>;
};
