import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, TestStoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: () => JSX.Element): JSX.Element => (
    <TestStoreProvider initialState={state}>
        <StoryComponent />
    </TestStoreProvider>
);
