import { STARSHIPS_URL } from './constants';

export const allStarships = async () => {
    const parameters = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    const response = await fetch(STARSHIPS_URL, parameters);
    const data = await response.json();

    return data;
};
