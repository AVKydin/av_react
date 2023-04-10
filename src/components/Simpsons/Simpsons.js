import React from 'react';
import Simpson from "../Simpson/Simpson";

const Simpsons = ({simpsons}) => {
    return (
        <div>
            {simpsons.map((simpson)=><Simpson simpson={simpson}/>)}
        </div>
    );
};

export default Simpsons;