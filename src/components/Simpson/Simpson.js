import React from 'react';

const simpson = ({simpson}) => {
    return (
        <div>
            <h3>{simpson.name} {simpson.surname}</h3>
            <h4>{simpson.age}</h4>
            <h4>{simpson.info}</h4>
            <img src={simpson.photo} alt={simpson.name + simpson.surname}></img>
        </div>
    );
};

export default simpson;