import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from '../useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

const useAsyncReducerLoad = (
    reducers: ReducersList,
    removeAfterUnmount = true
): void => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const reducersEntries = Object.entries(reducers) as ReducersListEntry[];

        reducersEntries.forEach(([name, reducer]) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                reducersEntries.forEach(([name]) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@REMOVE ${name} reducer` });
                });
            }
        };
    }, []);
};

export default useAsyncReducerLoad;
