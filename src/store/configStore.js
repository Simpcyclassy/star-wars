import { createStore } from 'redux';
import rootReducer from '../components/rootReducer';

export default function configureStore(initialState) {
    return {
        ...createStore(
            rootReducer,
            initialState,
        ),
    };
}