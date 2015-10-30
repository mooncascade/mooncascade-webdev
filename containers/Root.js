import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import App from '../containers/App';
import Test from '../components/Test';

import {
    ReduxRouter,
    routerStateReducer,
    reduxReactRouter,
    pushState
} from 'redux-router';
import { Route, IndexRoute } from 'react-router';

const store = configureStore();

class Parent extends Component {

    render() {
        return (
            <div>
                <h2>Parent</h2>
                {this.props.children}
            </div>
        );
    }
}

class Child extends Component {
    render() {
        const { params: { id }} = this.props;

        return (
            <div>
                <h2>Child</h2>
                {id && <p>{id}</p>}
            </div>
        );
    }
}

export default class Root extends Component {

    render() {

        return (
            <Provider store={store}>
                <ReduxRouter>
                    <Route path="/" component={App}>
                        <IndexRoute component={Test} />
                        <Route path="parent" component={Parent}>
                            <Route path="child" component={Child} />
                            <Route path="child/:id" component={Child} />
                        </Route>
                    </Route>
                </ReduxRouter>
            </Provider>
        );
    }
}
