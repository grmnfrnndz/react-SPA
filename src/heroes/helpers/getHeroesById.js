import {heroes} from "../data/heroes.js";

export const getHeroesById = (heroId) => {



    return heroes.find(hero => hero.id === heroId);
}