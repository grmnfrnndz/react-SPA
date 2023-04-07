import React from 'react';
import {Route, Routes} from "react-router-dom";

import {HeroRoutes} from "../heroes";
import {LoginScreen} from "../auth";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {PublicRoute} from "./PublicRoute.jsx";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={
                    <PublicRoute>
                        <LoginScreen/>
                    </PublicRoute>
                } />

                {/*<Route path="login" element={<LoginScreen/>}/>*/}


                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroRoutes/>
                    </PrivateRoute>
                } />

                {/*<Route path="/*" element={<HeroRoutes/>}/>*/}
            </Routes>
        </>
    );
}