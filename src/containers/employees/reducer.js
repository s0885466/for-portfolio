import * as R from 'ramda';

import {
    FETCH_EMPLOYEES_LOADING,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_FAILURE
} from "./constants";

const initialState = {
    data: {},
    status: 'none',
    error: false
};

export default function occupationsReducer(state = initialState, {type, payload, error}) {
    switch (type) {
        case FETCH_EMPLOYEES_LOADING:
            return {...state, status: 'loading', error: false};
        case FETCH_EMPLOYEES_SUCCESS:
            return {...state, data: R.indexBy(R.prop('id'), payload), status: 'success', error: false};
        case FETCH_EMPLOYEES_FAILURE:
            return {...state, status: 'failure', error};
        default:
            return state
    }
}