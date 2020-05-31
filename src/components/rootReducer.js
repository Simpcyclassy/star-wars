import { combineReducers } from 'redux';

import planets from './planets';
import people from './people';

export default combineReducers({
  planets: planets.reducers,
  people: people.reducers,
});
