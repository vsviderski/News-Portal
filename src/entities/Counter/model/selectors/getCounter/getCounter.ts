import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from '../../types/CounterSchema';

export const getCounter = (state: StateSchema): CounterSchema => state.counter;
