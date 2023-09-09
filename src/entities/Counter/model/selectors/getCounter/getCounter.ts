import { StateSchema } from 'app/providers/StoreProvider';
import { ICounterSchema } from '../../types/CounterSchema';

export const getCounter = (state: StateSchema): ICounterSchema => state.counter;
