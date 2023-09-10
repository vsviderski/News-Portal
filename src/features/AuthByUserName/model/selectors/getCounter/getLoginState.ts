import { StateSchema } from 'app/providers/StoreProvider';
import { ILoginSchema } from '../../types/LoginSchema';

export const getLoginState = (state: StateSchema): ILoginSchema => state.login;
