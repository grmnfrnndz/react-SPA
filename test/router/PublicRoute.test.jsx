import {PublicRoute} from "../../src/router/PublicRoute.jsx";
import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth/index.js";
import {MemoryRouter, Route, Routes} from "react-router-dom";

describe('Test on PublicRoute', function () {

    test('show children not logged', () => {
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>route public</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('route public')).toBeTruthy();
    })

    test('navigate is logged', () => {
        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'lepmah'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>route public</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={<h1>Screen Marvel</h1>}/>
                    </Routes>


                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Screen Marvel')).toBeTruthy();
    })

});