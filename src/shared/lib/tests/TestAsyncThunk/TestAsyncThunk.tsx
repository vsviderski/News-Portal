import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

// public dispatch: jest.MockedFn<any>,

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    constructor(
        public actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        public dispatch: Dispatch = jest.fn(),
        public getState: () => StateSchema = jest.fn()
    ) {}

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
