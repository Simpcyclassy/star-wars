import { LOAD_PLANETS, REQUEST_PLANETS, UPDATE_PLANETS } from "./actionTypes";

/**
 * Triggers request to update planet items
 *
 * @function
 * @param {Array} payload An array of Planets
 * @return {void} The {@link actionTypes.UPDATE_PLANETS UPDATE_PLANETS} action.
 */
export const updatePlanets = (payload) => ({
  payload,
  type: UPDATE_PLANETS,
});

/**
 * Triggers request to retrieve all planets from the db
 *
 * @function
 * @param {Array} payload An array of Planets
 * @return {void} The {@link actionTypes.REQUEST_PLANETS REQUEST_PLANETS} action.
 */
export const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

/**
 * Triggers request to load Planets
 *
 * @function
 * @return {void} The {@link actionTypes.LOAD_PLANETS } action.
 */
export const loadPlanets = () => ({
  type: LOAD_PLANETS,
});
