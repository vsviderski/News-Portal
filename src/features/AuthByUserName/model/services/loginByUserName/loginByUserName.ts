import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from 'entities/User';

export interface IAuthData {
    userName: string;
    password: string;
}

export const loginByUserName = createAsyncThunk(
    'login/loginByUserName',
    async (authData: IAuthData, thunkAPI) => {
        try {
            const response = await axios.post<IUser>('http://localhost:8000/login', authData);
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
