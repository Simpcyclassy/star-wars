// import { combineReducers } from 'redux';

// import planets from './planets';

// export default combineReducers({
//     planets: planets.reducers,
// });

import { combineReducers } from 'redux';

import planets from './planets';

const { reducers: planetsReducer } = planets;

const rootReducers = {
    planets: planetsReducer,
};

export default combineReducers(rootReducers);
