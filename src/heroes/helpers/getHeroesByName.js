import {heroes} from "../data/heroes.js";

export const getHeroesByName = (query = '') => {
    query = query.toLocaleLowerCase().trim();

    if (query.length === 0) return [];

    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(query));
}