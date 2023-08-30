import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { RenderResult, render } from '@testing-library/react';
import i18n from 'shared/config/i18nForTests/i18nForTests';

export interface renderWithRouterOptions {
    route?: string;
}

export const componentRender = (Component: ReactNode, options: renderWithRouterOptions = {}): RenderResult => {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>
                {Component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};
