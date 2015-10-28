import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPage } from '../actions/actions';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import mui from 'material-ui';
require('../styles/App.scss');

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, page } = this.props;
        dispatch(fetchPage(page));
    }

    render() {
        const { isFetching, dispatch } = this.props;
        return (
            <div className="mc-app">
                <Header onChangePage={(page) => { dispatch(fetchPage(page)) }} />
                {!isFetching &&
                    <Content {...this.props} />
                }
                {isFetching &&
                    <mui.CircularProgress mode="indeterminate" size={2} />
                }
                <Footer />
            </div>
        )
    }

    changePage(page) {
        this.props.dispatch(fetchPage(page));
    }
}

App.propTypes = {
    page: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    more: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { title, description, more, page, isFetching } = state;
    return {
        title,
        description,
        more,
        page,
        isFetching
    };
}

export default connect(mapStateToProps)(App);