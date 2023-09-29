import { createAsyncThunk } from '@reduxjs/toolkit';
import { t } from 'i18next';
import axios from 'axios';
import { IUser } from 'entities/User';

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
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(t('error text', { ns: 'authForm' }));
        }
    }
);
