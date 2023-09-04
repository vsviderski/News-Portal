import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { RenderResult, render } from '@testing-library/react';
import i18n from 'shared/config/i18nForTests/i18nForTests';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface renderWithRouterOptions {
    route?: string;
    initialState?: StateSchema;
}

export const componentRender = (Component: ReactNode, options: renderWithRouterOptions = {}): RenderResult => {
    const { route = '/', initialState = {} } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    {Component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};
