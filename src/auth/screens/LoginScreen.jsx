import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context";

export const LoginScreen = () => {

    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        login('LEPMAH XXX');

        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <>
            <div className="container mt-5">
                <h1>LoginScreen</h1>
                <hr/>

                <button className="btn btn-primary"
                onClick={onLogin}
                >
                    Login
                </button>

            </div>
        </>
    );
}