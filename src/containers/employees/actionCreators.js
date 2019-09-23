import {
    FETCH_EMPLOYEES_LOADING,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_FAILURE
} from "./constants";

export const fetchEmployeesLoading = () => ({
    type: FETCH_EMPLOYEES_LOADING,
});

export const fetchEmployeesSuccess = (occupations) => ({
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: occupations
});

export const fetchEmployeesFailure = (error) => ({
    type: FETCH_EMPLOYEES_FAILURE,
    error
});


