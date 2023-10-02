import { createAsyncThunk } from '@reduxjs/toolkit';
import { t } from 'i18next';
import axios from 'axios';
import { IUser, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';

export interface IAuthData {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<IUser, IAuthData, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData: IAuthData, thunkAPI) => {
        try {
            const response = await axios.post<IUser>(
                'http://localhost:8000/login',
                authData
            );
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(t('error text', { ns: 'authorization' }));
        }
    }
);
