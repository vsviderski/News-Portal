import { fireEvent, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
