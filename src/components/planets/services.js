import { PLANETS_URL } from './constants';

export const allPlanets = async () => {
    const parameters = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    const response = await fetch(PLANETS_URL, parameters);
    const data = await response.json();

    return data;
};
