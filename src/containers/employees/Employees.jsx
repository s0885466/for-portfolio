import React, {Component} from 'react';
import {connect} from 'react-redux';


import Layout from '../layout/Layout';
import Sidebar from "../../components/sidebar/Sidebar";
import Occupations from "../../components/occupations/Occupations";
import {fetchOccupations} from "../../components/occupations/thunks";
import {fetchEmployees} from "./thunks";

import {getEmployees, getQueryPath} from "../../libs/helpers";
import EmployeeElem from "./part/EmployeeElem";
import {Link} from "react-router-dom";

var searchQuery = require('search-query-parser');

class Employees extends Component {

    componentDidMount() {
        this.props.fetchOccupations();
        this.props.fetchEmployees('?');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.query !== prevProps.query) {
            this.props.fetchEmployees(this.props.query);
        }
    }

    render() {

        const {employees, query} = this.props;
        console.log(searchQuery.parse(query));
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
                <div  className={'col-12'}><Link to={`${this.props.query}&_page=1&_limit=20`}>More</Link></div>
            </Layout>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    employees: getEmployees(state.employees.data),
    query: getQueryPath(ownProps.history.location.search),
});

const mapDispatchToProps = {
    fetchOccupations,
    fetchEmployees
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);