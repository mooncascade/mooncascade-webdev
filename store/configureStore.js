import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './../reducers/reducers';
import {
    ReduxRouter,
    routerStateReducer,
    reduxReactRouter,
    pushState
} from 'redux-router';

import { createHistory } from 'history';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    reduxReactRouter({ createHistory })
)(createStore);

let reducer = combineReducers({
    dataReducers: reducers,
    router: routerStateReducer
});

/**
 * Store creation, which injects middleware that allows async data fetching.
 * @param initialState
 * @returns {*}
 */
export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}