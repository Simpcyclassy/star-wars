import { LOAD_CHARACTER, REQUEST_CHARACTER, UPDATE_CHARACTER } from "./actionTypes";

/**
 * Triggers request to update Character items
 *
 * @function
 * @param {Array} payload An array of Character
 * @return {void} The {@link actionTypes.UPDATE_CHARACTER UPDATE_CHARACTER} action.
 */
export const updateCharacter = (payload) => ({
  payload,
  type: UPDATE_CHARACTER,
});

/**
 * Triggers request to retrieve all Character from the db
 *
 * @function
 * @param {Array} payload An array of Character
 * @return {void} The {@link actionTypes.REQUEST_CHARACTER REQUEST_CHARACTER} action.
 */
export const requestCharacter = () => ({
  type: REQUEST_CHARACTER,
});

/**
 * Triggers request to load Character
 *
 * @function
 * @return {void} The {@link actionTypes.LOAD_CHARACTER } action.
 */
export const loadCharacter= () => ({
  type: LOAD_CHARACTER,
});
