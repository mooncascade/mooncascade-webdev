import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
require('../styles/Header.scss');

export default class Header extends Component {
    render() {
        return (
            <mui.Toolbar className="header">
                <mui.ToolbarGroup key={0} float="left">
                    <img src="http://mooncascade.com/images/mooncascade-logo.svg" height="50" />
                </mui.ToolbarGroup>
                <mui.ToolbarGroup key={1} float="right">
                    <mui.FlatButton label="Hello" rippleColor="#ffce00" hoverColor="#fff" onClick={() => { this.props.onChangePage('company') }} />
                    <mui.FlatButton label="Join us" rippleColor="#ffce00" hoverColor="#fff" onClick={() => { this.props.onChangePage('webdev') }} />
                </mui.ToolbarGroup>
            </mui.Toolbar>
        );
    }
};