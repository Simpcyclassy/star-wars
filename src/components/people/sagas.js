import { takeLatest, put, call } from 'redux-saga/effects';

import { updateCharacter, loadCharacter } from './actions';
import { REQUEST_CHARACTER } from './actionTypes';
import { allCharacters } from './services';

/**
 * Handles requesting the list of transactions from the database
 *
 * @return {Void} - void
 */
function* requestAllCharacters() {
    try {
        yield put(loadCharacter());
        const res = yield call(allCharacters);
        console.log(res);
        if (res) {
            yield put(updateCharacter(res.results));
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

export default function* watchRequestAllCharacters() {
    yield takeLatest(REQUEST_CHARACTER, requestAllCharacters);
}
