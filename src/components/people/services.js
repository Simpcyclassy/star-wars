import { PEOPLE_URL } from './constants';

export const allCharacters = async () => {
    const parameters = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'cors',
    };
    const response = await fetch(PEOPLE_URL, parameters);
    const data = await response.json();

    return data;
};
