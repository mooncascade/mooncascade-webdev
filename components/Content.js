import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
require('../styles/Content.scss');

export default class Content extends Component {
    render() {
        const { title, description } = this.props;
        return (
            <div className='content'>
                <mui.Card className='content__card'>
                    <mui.CardTitle title={title} className='content__title' />
                    <mui.CardText className='content__text'>
                        <p className='description'>{description}</p>
                    </mui.CardText>
                </mui.Card>
            </div>
        )
    }
}

