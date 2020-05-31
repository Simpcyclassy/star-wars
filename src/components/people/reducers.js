import { LOAD_CHARACTER, UPDATE_CHARACTER } from "./actionTypes";

const initialState = {
  isCharactersLoading: false,
  characters: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CHARACTER:
      return {
        ...state,
        isCharactersLoading: true,
      };
    case UPDATE_CHARACTER:

      return {
        ...state,
        isCharactersLoading: false,
        characters: payload,
      };
    default:
      return state;
  }
};
