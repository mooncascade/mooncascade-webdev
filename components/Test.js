import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
require('../styles/Header.scss');

export default class Test extends Component {
    render() {

        return (
            <div>
                <h1>Hello my friend.</h1>

                <ul>
                    <li>npm install --save redux-router@1.0.0-beta3</li>
                    <li>npm install --save react-router@1.0.0-rc3</li>
                    <li>npm install --save history</li>
                    <li>Example: <a href="https://github.com/rackt/redux-router/blob/master/examples/basic/index.js">Redux Router GitHub example</a></li>
                    <li>Add historyApiFallback: true to server.js</li>
                </ul>
            </div>
        );
    }
};