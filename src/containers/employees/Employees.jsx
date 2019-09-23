import React, {Component} from 'react';
import {connect} from 'react-redux';

import Layout from '../layout/Layout';
import Sidebar from "../../components/sidebar/Sidebar";
import Occupations from "../../components/occupations/Occupations";
import {fetchOccupations} from "../../components/occupations/thunks";
import {fetchEmployees} from "./thunks";

class Employees extends Component {

    componentDidMount() {
        this.props.fetchOccupations();
        this.props.fetchEmployees(1);
    }

    render() {
        return (
            <Layout>
                <Sidebar>
                    <Occupations/>
                </Sidebar>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = {
    fetchOccupations,
    fetchEmployees
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);