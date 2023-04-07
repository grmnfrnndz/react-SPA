import React from 'react';
import {HeroList} from "../components";

export const DcScreen = () => {
    const publisher = 'DC Comics';

    return (
        <>
            <h1>DcScreen</h1>
            <hr/>
           <HeroList publisher={publisher}/>
        </>
    );
}
