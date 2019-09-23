import React from 'react';
import {connect} from 'react-redux';

import {getOccupations} from "../../libs/helpers";


const Occupation = ({occupation}) => (
    <li>{occupation}</li>
);

const Occupations = (props) => (
    <ul>
        {props.occupations.map(({id, occupation}) => (
            <Occupation key={id} occupation={occupation}/>
        ))}
    </ul>
);

const mapStateToProps = state => ({
    occupations: getOccupations(state.occupations.data)
});

export default connect(mapStateToProps)(Occupations);