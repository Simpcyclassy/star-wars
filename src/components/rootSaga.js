import { all } from 'redux-saga/effects';

import planets from './planets';
import people from './people';
import starships from './starships';

export default function* rootSaga() {
    yield all([
        planets.sagas(),
        people.sagas(),
        starships.sagas(),
    ]);
}
