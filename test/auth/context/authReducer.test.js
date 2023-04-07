import {authReducer} from "../../../src/auth/index.js";
import {types} from "../../../src/auth/types/types.js";

describe('Test on authReducer', function () {

    const user = {
        id: 123,
        name: 'lepmah'
    }

    test('return state default', () => {

        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});

    })

    test('call to login authenticated and established user', () => {

        const action = {
            type: types.login,
            payload: user
        }

        const state = authReducer({logged: false}, action);

        expect(state).toEqual({ logged: true, user: action.payload})
    })


    test('call to logout', () => {
        const action = {
            type: types.logout,
        }

        const state = {
            logged: true, user
        }

        const newState = authReducer(state, action);

        expect(newState).toEqual({logged: false})
    })

});