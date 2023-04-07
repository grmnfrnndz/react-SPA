import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth/index.js";
import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../src/router/AppRouter.jsx";

describe('Test on AppRouter', function () {

    test('show login is not authenticated', () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );


        // expect(screen.getByText('login')).toBeTruthy();
        expect(screen.getAllByText('Login').length).toBe(1);
        // screen.debug();

    })

    test('show component mavel if logged', () => {
        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'lepmah'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText('Marvel').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

        // screen.debug();
    })

});


