import React, {Component} from 'react';

const EmployeeElem = ({name, avatar}) => {
    return (
        <div className={'col-200'}>
            <h2>{name}</h2>
            <img src={avatar} alt={name}/>
        </div>
    )
};

export default EmployeeElem;