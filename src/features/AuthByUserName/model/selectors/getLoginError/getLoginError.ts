import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';
import { ILoginSchema } from '../../types/LoginSchema';

export const getLoginError = createSelector(
    getLoginState,
    (loginForm: ILoginSchema | undefined): string => loginForm?.error || ''
);
