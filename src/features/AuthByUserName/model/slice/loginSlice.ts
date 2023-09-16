import { createSlice } from '@reduxjs/toolkit';
import { ILoginSchema } from '../types/LoginSchema';

const initialState: ILoginSchema = {
    userName: '',
    password: '',
    isLoading: false,
    error: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userName: (state, action) => {
            state.userName = action.payload;
        },
        password: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
