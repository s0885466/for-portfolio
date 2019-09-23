import React from 'react';
import {Switch, Route} from "react-router-dom";
import Employee from "../containers/employee/Employee";
import Employees from "../containers/employees/Employees";

const routes = (
    <Switch>
        <Route path={'/'} component={Employees} exact/>
        <Route path={'/employee'} component={Employee}/>
    </Switch>
);

export default routes;