import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { StateSchema } from 'app/providers/StoreProvider';
import Counter from './Counter';

describe('Counter', () => {
    test('Counter render', () => {
        const initialState = { counter: { value: 10 } } as StateSchema;
        componentRender(<Counter />, { initialState });
        expect(screen.getByTestId('counterValue')).toHaveTextContent('10');
    });

    test('Counter increment', () => {
        const initialState = { counter: { value: 10 } } as StateSchema;
        componentRender(<Counter />, { initialState });
        const incBtn = screen.getByTestId('increment');
        fireEvent.click(incBtn);
        expect(screen.getByTestId('counterValue')).toHaveTextContent('11');
    });

    test('Counter decrement', () => {
        const initialState = { counter: { value: 10 } } as StateSchema;
        componentRender(<Counter />, { initialState });
        const decBtn = screen.getByTestId('decrement');
        fireEvent.click(decBtn);
        expect(screen.getByTestId('counterValue')).toHaveTextContent('9');
    });
});
