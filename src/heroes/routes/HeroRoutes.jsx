import React from 'react';
import {Navbar} from "../../ui";
import {Navigate, Route, Routes} from "react-router-dom";
import {DcScreen, HeroScreen, MarvelScreen, SearchScreen} from "../screens/index.js";
import {LoginScreen} from "../../auth/index.js";

export const HeroRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">

                <Routes>
                    <Route path="marvel" element={<MarvelScreen/>}/>
                    <Route path="dc" element={<DcScreen/>}/>

                    <Route path="search" element={<SearchScreen/>}/>
                    <Route path="hero/:heroId" element={<HeroScreen/>}/>


                    <Route path="/" element={<Navigate to="/marvel"/>}/>
                </Routes>
            </div>
        </>
    );
}