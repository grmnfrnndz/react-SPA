import {heroes} from "../data/heroes.js";

export const getHeroesByPublisher = (publisher) => {

    const validPusblishers = ['Marvel Comics', 'DC Comics'];
    if (!validPusblishers.includes(publisher)) {
        throw new Error(`${publisher} is not valid publisher`)
    }

    return heroes.filter(hero => hero.publisher === publisher);

}