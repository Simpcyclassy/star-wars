import configureStore from './configStore';
import rootSaga from '../components/rootSaga';

const store = configureStore({});
store.runSaga(rootSaga);

export default store;
