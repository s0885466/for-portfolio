import {
    fetchOccupationLoading,
    fetchOccupationFailure,
    fetchOccupationSuccess
} from "./actionCreators";
import {ROOT_SERVER} from "../../constants/rootServer";
import {getJson} from "../../libs/api";


export const fetchOccupations = () => (dispatch, getState) => {
    dispatch(fetchOccupationLoading());
    return getJson(`${ROOT_SERVER}occupations`)
        .then(res => dispatch(fetchOccupationSuccess(res)))
        .catch(err => dispatch(fetchOccupationFailure(err)))
};