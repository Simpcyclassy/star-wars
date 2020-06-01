import { takeLatest, put, call } from 'redux-saga/effects';

import { updateStarships, loadStarships } from './actions';
import { REQUEST_STARSHIPS } from './actionTypes';
import { allStarships } from './services';

/**
 * Handles requesting the list of starships from the database
 *
 * @return {Void} - void
 */
function* requestAllStarhips() {
    try {
        yield put(loadStarships());
        const res = yield call(allStarships);
        console.log(res);

        if (res) {
            yield put(updateStarships(res.results));
        } 
    } catch (error) {
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_STARSHIPS REQUEST_STARSHIPS} action.
 * Triggers request to get starships from database
 *
 * @return {void}
 */

export default function* watchRequestAllStarships() {
    yield takeLatest(REQUEST_STARSHIPS, requestAllStarhips);
}
