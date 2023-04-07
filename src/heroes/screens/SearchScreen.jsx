import React, {useEffect, useMemo} from 'react';
import queryString from 'query-string';
import {HeroCard} from "../components/index.js";
import {useForm} from "../../hooks/useForm.js";
import {useLocation, useNavigate} from "react-router-dom";
import {getHeroesByName} from "../helpers";

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {query = ''} = queryString.parse(location.search);
    const heroes = getHeroesByName(query);

    const showSearch = (query.length === 0);
    const showError = (query.length > 0) && heroes.length === 0;

    const {searchText, onResetForm, onInputChange} = useForm({searchText: query})

    const onSearchSubmit = (event) => {
        event.preventDefault();
        const value = searchText.trim();
        if (value.length < 3) return;

        navigate(`?query=${searchText}`);
    }

    return (
        <>
            <h1>SearchScreen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Searching...</h4>
                    <hr/>
                    <form onSubmit={onSearchSubmit} aria-label="form">
                        <input type="text"
                               placeholder="Search Hero"
                               className="form-control"
                               name="searchText"
                               autoComplete="off"
                               value={searchText}
                               onChange={onInputChange}
                        />
                        <button type="submit" className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}>
                        Search a hero
                    </div>
                    <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none'}}>
                        No hero with <b>{query}</b>
                    </div>

                    {
                        heroes.map(hero => (<HeroCard key={hero.id} {...hero}/>))
                    }
                </div>
            </div>
        </>
    );
}