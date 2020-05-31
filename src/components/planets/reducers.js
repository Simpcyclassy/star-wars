import { UPDATE_PLANETS, LOAD_PLANETS } from './actionTypes';

const initialState = {
    isPlanetsLoading: false,
    planets: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PLANETS:
            return {
                ...state,
                isPlanetsLoading: true,
            };
        case UPDATE_PLANETS:
            return {
                ...state,
                isPlanetsLoading: false,
                planets: payload,
            };
        default:
            return state;
    }
};

