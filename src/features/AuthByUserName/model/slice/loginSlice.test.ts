import { DeepPartial } from "@reduxjs/toolkit";
import { ILoginSchema } from "../types/LoginSchema";
import { loginActions, loginFormReducer } from "./loginSlice";
import { loginByUserName } from "../services/loginByUserName/loginByUserName";

describe('loginSlice', () => {
    test('set userName', () => {
        const state: DeepPartial<ILoginSchema> = { username: '' };
        expect(loginFormReducer(state as ILoginSchema, loginActions.userName('test'))).toEqual({ username: 'test' });
    });

    test('set password', () => {
        const state: DeepPartial<ILoginSchema> = { password: '' };
        expect(loginFormReducer(state as ILoginSchema, loginActions.password('test')))
            .toEqual({ password: 'test' });
    });

    test('check isLoading', () => {
        const state: DeepPartial<ILoginSchema> = { isLoading: false };
        expect(loginFormReducer(state as ILoginSchema, loginByUserName.pending)).toEqual({ isLoading: true });
        expect(loginFormReducer(state as ILoginSchema, loginByUserName.fulfilled)).toEqual({ isLoading: false });
        expect(loginFormReducer(state as ILoginSchema, loginByUserName.rejected)).toEqual({ isLoading: false });
    });
});
