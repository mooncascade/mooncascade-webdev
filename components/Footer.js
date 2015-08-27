import React, { Component, PropTypes } from 'react';
require('../styles/Footer.scss');

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <span className='footer__name'>Mooncascade LLC</span>
                <span className='footer__contacts'>
                    <span>+372 504 5119</span>
                    <span>info@mooncascade.com</span>
                </span>
            </div>
        )
    }
}