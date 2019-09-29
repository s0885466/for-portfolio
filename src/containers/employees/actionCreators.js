import {
    FETCH_EMPLOYEES_LOADING,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_FAILURE,
    FETCH_EMPLOYEES_ADD_SUCCESS
} from "./constants";

export const fetchEmployeesLoading = () => ({
    type: FETCH_EMPLOYEES_LOADING,
});

export const fetchEmployeesSuccess = (employees) => ({
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: employees
});

export const fetchEmployeesAddSuccess = (employees) => ({
    type: FETCH_EMPLOYEES_ADD_SUCCESS,
    payload: employees
});


export const fetchEmployeesFailure = (error) => ({
    type: FETCH_EMPLOYEES_FAILURE,
    error
});


