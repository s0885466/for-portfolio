import {
    FETCH_OCCUPATIONS_LOADING,
    FETCH_OCCUPATIONS_SUCCESS,
    FETCH_OCCUPATIONS_FAILURE
} from "./constants";

export const fetchOccupationLoading = () => ({
    type: FETCH_OCCUPATIONS_LOADING,
});

export const fetchOccupationSuccess = (occupations) => ({
    type: FETCH_OCCUPATIONS_SUCCESS,
    payload: occupations
});

export const fetchOccupationFailure = (error) => ({
    type: FETCH_OCCUPATIONS_FAILURE,
    error
});


