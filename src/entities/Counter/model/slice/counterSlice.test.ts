import { DeepPartial } from '@reduxjs/toolkit';
import { counterActions, counterReducer } from './counterSlice';
import { ICounterSchema } from '../types/CounterSchema';

describe('counterSlice', () => {
    test('decrement', () => {
        const state: DeepPartial<ICounterSchema> = { value: 10 };
        expect(
            counterReducer(state as ICounterSchema, counterActions.decrement())
        ).toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: DeepPartial<ICounterSchema> = { value: 10 };
        expect(
            counterReducer(state as ICounterSchema, counterActions.increment())
        ).toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
