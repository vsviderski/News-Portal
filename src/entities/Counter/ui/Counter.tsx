import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterActions } from '../model/slice/counterSlice';

interface ICounterProps {
    className?: string;
}

const Counter: FC<ICounterProps> = (): JSX.Element => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state: StateSchema) => state.counter.value);

    const onIncrement = ():void => {
        dispatch(counterActions.increment);
    };

    const onDecrement = ():void => {
        dispatch(counterActions.decrement);
    };

    return (
        <div>
            <h2>{counterValue}</h2>
            <Button onClick={onIncrement}>Increment</Button>
            <Button onClick={onDecrement}>Decrement</Button>
        </div>
    );
};

export default Counter;
