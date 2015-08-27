import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './../reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

/**
 * Store creation, which injects middleware that allows async data fetching.
 * @param initialState
 * @returns {*}
 */
export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducers, initialState);
}