import { StateSchema } from 'app/providers/StoreProvider';
import { IUser } from '../../types/user';

export const getUserAuthData = (state: StateSchema): IUser | undefined => state.user.authData;
