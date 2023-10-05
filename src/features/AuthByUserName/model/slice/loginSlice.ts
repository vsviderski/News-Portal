import { createSlice } from '@reduxjs/toolkit';
import { ILoginSchema } from '../types/LoginSchema';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';

const initialState: ILoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userName: (state, action) => {
            state.username = action.payload;
        },
        password: (state, action) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUserName.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions, reducer: loginFormReducer } = loginSlice;
