import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';
import { AppDispatch, RootState } from '../types';
import { createReducerManager } from './ReducerManager';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducer);
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce as any,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export const store = createReduxStore();
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
