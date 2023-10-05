import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginFormReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducers = {
    loginForm: loginFormReducer,
}; 


export const StoreDecorator = (state: DeepPartial<StateSchema>) =>
    (StoryComponent: () => JSX.Element): JSX.Element => (
        <StoreProvider
            initialState={state}
            asyncReducers={defaultAsyncReducers as ReducersMapObject<StateSchema>}
        >
            <StoryComponent />
        </StoreProvider>
    );
