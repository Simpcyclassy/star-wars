import { combineReducers } from 'redux';

import planets from './planets';
import people from './people';
import starships from './starships';

export default combineReducers({
  planets: planets.reducers,
  people: people.reducers,
  starships: starships.reducers,
});
