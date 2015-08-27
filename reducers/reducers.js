import { REQUEST_PAGE, RECEIVE_PAGE } from './../actions/actions'

let defaultState = {
    title: '',
    description: '',
    more: '',
    page: 'company',
    isFetching: true
};

/**
 * Describes how stores state should be changed for a given action.
 * @param state - current state of the store
 * @param action - dispatched action
 * @returns {*} - new store state. NB new object. No mutations on existing store.
 */
export default function reducers(state = defaultState, action = {}) {
    switch (action.type) {
        case REQUEST_PAGE:
            return Object.assign({}, state, {
                page: action.page,
                isFetching: true
            });
        case RECEIVE_PAGE:
            return Object.assign({}, state,
                action.data,
                {
                    page: action.page,
                    isFetching: false
                }
            );
        default:
            return state;
    }
}