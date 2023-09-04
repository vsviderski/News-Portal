/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface ICounterProps {
    className?: string;
}

const Counter: FC<ICounterProps> = (): JSX.Element => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const onIncrement = (): void => {
        dispatch(counterActions.increment());
    };

    const onDecrement = (): void => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h2 data-testid='counterValue'>{counterValue}</h2>
            <Button data-testid='increment' onClick={onIncrement}>Increment</Button>
            <Button data-testid='decrement' onClick={onDecrement}>Decrement</Button>
        </div>
    );
};

export default Counter;
