import React, {Component} from 'react';
import {connect} from 'react-redux';

import Layout from '../layout/Layout';
import Sidebar from "../../components/sidebar/Sidebar";
import Occupations from "../../components/occupations/Occupations";
import {fetchOccupations} from "../../components/occupations/thunks";
import {fetchEmployees} from "./thunks";

import {getEmployees} from "../../libs/helpers";
import EmployeeElem from "./part/EmployeeElem";

class Employees extends Component {

    componentDidMount() {
        this.props.fetchOccupations();
        this.props.fetchEmployees(1);
    }

    render() {
        const {employees} = this.props;
        console.log(employees);
        return (
            <Layout>
                <Sidebar className={'col-2'}>
                    <Occupations/>
                </Sidebar>
                <section className={'col-10 row flex-space-around'}>
                    {employees.map(emp => (
                        <EmployeeElem key={emp.id} name={emp.name} avatar={emp.avatar}/>
                        ))}
                </section>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    employees: getEmployees(state.employees.data)
});

const mapDispatchToProps = {
    fetchOccupations,
    fetchEmployees
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);