import {serverRoutes} from './const';
export const getJokeFromExpress = () => {
    return fetch(serverRoutes.GET_JOKE)
}


