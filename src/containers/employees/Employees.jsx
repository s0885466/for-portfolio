import React, {Component} from 'react';
import {connect} from 'react-redux';

import Layout from '../layout/Layout';
import Sidebar from "../../components/sidebar/Sidebar";
import Occupations from "../../components/occupations/Occupations";
import {fetchOccupations} from "../../components/occupations/thunks";
import {fetchEmployees} from "./thunks";

import {getEmployees, getQueryPath} from "../../libs/helpers";
import EmployeeElem from "./part/EmployeeElem";

class Employees extends Component {

    componentDidMount() {
        this.props.fetchOccupations();
        this.props.fetchEmployees(this.props.query);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.query !== prevProps.query) {
            this.props.fetchEmployees(this.props.query);
        }
    }

    render() {
        console.log(this.props.query);
        const {employees} = this.props;
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

const mapStateToProps = (state, ownProps) => ({
    employees: getEmployees(state.employees.data),
    query: getQueryPath(ownProps.history.location.pathname)
});

const mapDispatchToProps = {
    fetchOccupations,
    fetchEmployees
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);