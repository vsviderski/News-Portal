import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUserName } from './loginByUserName';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('loginByUserName thunk', () => {    
    test('success login', async () => {
        const userValue = { username: 'Vlad', id: 1 };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({username: 'User', password: 'Password test'});

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('loginByUserName error', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject());
        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({username: 'User', password: 'Password test'});

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
