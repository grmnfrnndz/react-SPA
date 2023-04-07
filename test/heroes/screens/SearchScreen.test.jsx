import {fireEvent, render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {SearchScreen} from "../../../src/heroes/index.js";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


describe('Test on SearchScreen', function () {

    // siempre para limpiar cualquier mock
    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('should show default values', () => {

        const {container} = render(
            <MemoryRouter>
                <SearchScreen/>
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();

        // screen.debug();
    });


    test('should be search for batman and display content in button search and queryParameters', () => {

        render(
            <MemoryRouter initialEntries={['/search?query=batman']}>
                <SearchScreen/>
            </MemoryRouter>
        );

        const inputSearch = screen.getByRole('textbox');
        expect(inputSearch.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain('assets/heroes/dc-batman.jpg');

        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('none');

        // screen.debug();
    });


    test('should be search for batmanxxx and display error', () => {

        render(
            <MemoryRouter initialEntries={['/search?query=batman123']}>
                <SearchScreen/>
            </MemoryRouter>
        );

        const inputSearch = screen.getByRole('textbox');
        expect(inputSearch.value).toBe('batman123');

        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('');

        // screen.debug();
    });

    test('should be search without queryParameters', () => {

        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen/>
            </MemoryRouter>
        );

        const inputSearch = screen.getByRole('textbox');

        fireEvent.change(inputSearch, {
            target: {
                name: 'searchText',
                value: inputValue
            }
        })

        const form = screen.getByRole('form');
        fireEvent.submit(form);


        expect(mockedUseNavigate).toHaveBeenCalledWith(`?query=${inputValue}`);


        // screen.debug();
    });





});