import {
    fetchEmployeesLoading,
    fetchEmployeesFailure,
    fetchEmployeesSuccess,
    fetchEmployeesAddSuccess
} from "./actionCreators";
import {ROOT_SERVER} from "../../constants/rootServer";
import {getJson} from "../../libs/api";


export const fetchEmployees = (query = '', page = 1, limit = 10) => (dispatch, getState) => {
    dispatch(fetchEmployeesLoading());
    return getJson(`${ROOT_SERVER}employees?${query}&_page=${page}&_limit=${limit}`)
        .then(res => {
            (+page === 1)
                ? dispatch(fetchEmployeesSuccess(res))
                : dispatch(fetchEmployeesAddSuccess(res))
        })
        .catch(err => dispatch(fetchEmployeesFailure(err)))
};