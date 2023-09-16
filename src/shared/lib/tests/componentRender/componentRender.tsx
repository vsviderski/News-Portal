import { ReactNode } from 'react';
import { RenderResult, render } from '@testing-library/react';
import { StateSchema, TestStoreProvider } from 'app/providers/StoreProvider';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18nForTests/i18nForTests';

export interface renderWithRouterOptions {
    route?: string;
    initialState?: StateSchema;
}

export const componentRender = (
    Component: ReactNode,
    options: renderWithRouterOptions = {}
): RenderResult => {
    const { route = '/', initialState = {} } = options;

    return render(
        <TestStoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>{Component}</I18nextProvider>
            </MemoryRouter>
        </TestStoreProvider>
    );
};
