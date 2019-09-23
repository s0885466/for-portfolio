import * as R from 'ramda';

import {
    FETCH_OCCUPATIONS_LOADING,
    FETCH_OCCUPATIONS_SUCCESS,
    FETCH_OCCUPATIONS_FAILURE
} from "./constants";

const initialState = {
    data: {},
    status: 'none',
    error: false
};

export default function occupationsReducer(state = initialState, {type, payload, error}) {
    switch (type) {
        case FETCH_OCCUPATIONS_LOADING:
            return {...state, status: 'loading', error: false};
        case FETCH_OCCUPATIONS_SUCCESS:
            return {...state, data: R.indexBy(R.prop('id'), payload), status: 'success', error: false};
        case FETCH_OCCUPATIONS_FAILURE:
            return {...state, status: 'failure', error};
        default:
            return state
    }
}