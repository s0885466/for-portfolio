import {
    fetchEmployeesLoading,
    fetchEmployeesFailure,
    fetchEmployeesSuccess
} from "./actionCreators";
import {ROOT_SERVER} from "../../constants/rootServer";
import {getJson} from "../../libs/api";


export const fetchEmployees = (page, limit = 10) => (dispatch, getState) => {
    dispatch(fetchEmployeesLoading());
    return getJson(`${ROOT_SERVER}employees?_page=${page}&_limit=${limit}`)
        .then(res => dispatch(fetchEmployeesSuccess(res)))
        .catch(err => dispatch(fetchEmployeesFailure(err)))
};