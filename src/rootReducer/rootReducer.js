import {combineReducers} from "redux";
import employees from "../containers/employees/reducer";
import occupations from "../components/occupations/reducer";

const rootReducer = combineReducers({
    employees,
    occupations
});

export default rootReducer;