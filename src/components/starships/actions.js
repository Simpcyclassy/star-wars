import { LOAD_STARSHIPS, REQUEST_STARSHIPS, UPDATE_STARSHIPS } from "./actionTypes";

/**
 * Triggers request to update Starships items
 *
 * @function
 * @param {Array} payload An array of Starships
 * @return {void} The {@link actionTypes.UPDATE_STARSHIPS UPDATE_STARSHIPS} action.
 */
export const updateStarships = (payload) => ({
  payload,
  type: UPDATE_STARSHIPS,
});

/**
 * Triggers request to retrieve all Starships from the db
 *
 * @function
 * @param {Array} payload An array of Starships
 * @return {void} The {@link actionTypes.REQUEST_STARSHIPS REQUEST_STARSHIPS} action.
 */
export const requestStarships = () => ({
  type: REQUEST_STARSHIPS,
});

/**
 * Triggers request to load Starships
 *
 * @function
 * @return {void} The {@link actionTypes.LOAD_STARSHIPS } action.
 */
export const loadStarships = () => ({
  type: LOAD_STARSHIPS,
});
