import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar collapse', () => {
        componentRender(<Sidebar />);
        screen.debug();
        const toggleBtn = screen.getByTestId('toggle-icon');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
