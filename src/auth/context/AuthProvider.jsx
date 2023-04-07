import React, {useReducer} from 'react';
import {AuthContext} from "./AuthContext.jsx";
import {authReducer} from "./authReducer.js";
import {types} from "../types/types.js";

const initialState = {
    logged: false
}


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, initialState, init)

    // efecto para guardar en el local igual puede ser util

    const login = (name ='') => {

        const user = {
            id: 'abc',
            name
        }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout,
        }
        dispatch(action);
    }


    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}