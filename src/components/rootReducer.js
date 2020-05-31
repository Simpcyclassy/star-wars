import { combineReducers } from 'redux';

import planets from './planets';

export default combineReducers({
  planets: planets.reducers,
});
