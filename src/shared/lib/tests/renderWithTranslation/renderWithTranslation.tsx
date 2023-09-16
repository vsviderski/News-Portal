import { ReactNode } from 'react';
import { RenderResult, render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18nForTests/i18nForTests';

export const renderWithTranslation = (Component: ReactNode): RenderResult =>
    render(<I18nextProvider i18n={i18n}>{Component}</I18nextProvider>);
