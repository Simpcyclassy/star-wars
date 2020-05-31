import { all } from 'redux-saga/effects';

import planets from './planets';

export default function* rootSaga() {
    yield all([
        planets.sagas(),
    ]);
}
