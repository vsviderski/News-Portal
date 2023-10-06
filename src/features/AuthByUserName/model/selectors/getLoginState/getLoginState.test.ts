import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return login form state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'test name',
                password: 'password',
                error: 'error',
                isLoading: false,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'test name',
            password: 'password',
            error: 'error',
            isLoading: false,
        });
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
