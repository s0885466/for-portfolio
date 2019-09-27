import React from 'react';
import {connect} from 'react-redux';
import style from './Occupations.module.scss'
import {getOccupations} from "../../libs/helpers";
import {NavLink} from "react-router-dom";


const Occupation = ({occupation, id}) => (
    <li><NavLink to={`/employees?occupation=${occupation}&_page=1&_limit=10`}>{occupation}</NavLink></li>
);

const Occupations = (props) => (
    <ul className={style.Occupation}>
        {props.occupations.map(({id, occupation}) => (
            <Occupation key={id} occupation={occupation} id={id}/>
        ))}
    </ul>
);

const mapStateToProps = state => ({
    occupations: getOccupations(state.occupations.data)
});

export default connect(mapStateToProps)(Occupations);