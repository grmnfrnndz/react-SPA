import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../../../src/auth/index.js";
import {MemoryRouter} from "react-router-dom";
import {Navbar} from "../../../src/ui/index.js";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


describe('test on NavBar', function () {

    const contextValue = {
        logged: true,
        user: {
            id: 123,
            name: 'lepmah'
        },
        logout: jest.fn()
    }

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('show name of user authenticated', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText(contextValue.user.name)).toBeTruthy();


    });

    test('call to logout -> click button', ()=> {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
    });

});