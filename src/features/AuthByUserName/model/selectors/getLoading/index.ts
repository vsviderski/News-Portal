import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';
import { ILoginSchema } from '../../types/LoginSchema';

export const getLoading = createSelector(
    getLoginState,
    (loginForm: ILoginSchema | undefined): boolean => loginForm?.isLoading || false
);
