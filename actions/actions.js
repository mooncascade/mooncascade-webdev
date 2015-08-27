import fetch from 'isomorphic-fetch';

export const REQUEST_PAGE = 'REQUEST_PAGE';
export const RECEIVE_PAGE = 'RECEIVE_PAGE';

function requestPage(page) {
    return {
        type: REQUEST_PAGE,
        page
    }
}

function receivePage(page, json) {
    return {
        type: RECEIVE_PAGE,
        page,
        data: json
    }
}

export function fetchPage(page) {
    return dispatch => {
        dispatch(requestPage(page));
        return fetch(`http://localhost:3001/${page}`)
            .then(req => req.json())
            .then(json => dispatch(receivePage(page, json)))
            .catch(err => {
                dispatch(receivePage(page, {
                    title: 'Oops',
                    description: 'I failed to fetch the data you requested. Did you start the backend service?',
                    more: ''
                }))
            });
    }
}