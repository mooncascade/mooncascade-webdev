import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
require('../styles/Header.scss');
import { Link } from 'react-router';

export default class Header extends Component {
    render() {
        const links = [
            '/',
            '/parent?foo=bar',
            '/parent/child?bar=baz',
            '/parent/child/123?baz=foo'
        ].map(l =>
                <mui.FlatButton label="Link" rippleColor="#ffce00" hoverColor="#fff" containerElement={<Link to={l} />}/>

        );
        return (
            <mui.Toolbar className="header">
                <mui.ToolbarGroup key={0} float="left">
                    <img src="http://mooncascade.com/images/mooncascade-logo.svg" height="50" />
                </mui.ToolbarGroup>
                <mui.ToolbarGroup key={1} float="right">

                    {links}
                </mui.ToolbarGroup>
            </mui.Toolbar>
        );
    }
};