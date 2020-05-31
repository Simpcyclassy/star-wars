import { takeLatest, put, call } from 'redux-saga/effects';

import { updatePlanets, loadPlanets } from './actions';
import { REQUEST_PLANETS } from './actionTypes';
import { allPlanets } from './services';

/**
 * Handles requesting the list of transactions from the database
 *
 * @return {Void} - void
 */
function* requestAllPlanets() {
    try {
        yield put(loadPlanets());
        const res = yield call(allPlanets);
        if (res) {
            yield put(updatePlanets(res.results));
        } 
    } catch (error) {
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_PLANETS REQUEST_PLANETS} action.
 * Triggers request to get planetsfrom database
 *
 * @return {void}
 */

export default function* watchRequestAllPlanets() {
    yield takeLatest(REQUEST_PLANETS, requestAllPlanets);
}
