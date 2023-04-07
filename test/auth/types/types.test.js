import {types} from "../../../src/auth/types/types.js";

describe('Test on types', function () {
    test('return types determinated', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    })
});