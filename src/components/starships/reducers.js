import { LOAD_STARSHIPS, UPDATE_STARSHIPS } from "./actionTypes";

const initialState = {
  isStarshipsLoading: false,
  starships: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_STARSHIPS:
      return {
        ...state,
        isStarshipsLoading: true,
      };
    case UPDATE_STARSHIPS:

      return {
        ...state,
        isStarshipsLoading: false,
        starships: payload,
      };
    default:
      return state;
  }
};
