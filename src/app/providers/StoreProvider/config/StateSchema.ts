import { AnyAction, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ICounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    loginForm?: ILoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManager;
}
