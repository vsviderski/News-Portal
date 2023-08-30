import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from './Button';

describe('Button', () => {
    test('render Button', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
