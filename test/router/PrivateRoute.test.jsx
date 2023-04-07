import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth/index.js";
import {PublicRoute} from "../../src/router/PublicRoute.jsx";
import {PrivateRoute} from "../../src/router/PrivateRoute.jsx";
import {MemoryRouter} from "react-router-dom";

describe('Test on PrivateRoute', function () {

    test('show children is logged', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'lepmah'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>route privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('route privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    })


});