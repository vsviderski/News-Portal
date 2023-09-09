import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from '../../types/user';

export const getCounter = (state: StateSchema): CounterSchema => state.counter;
