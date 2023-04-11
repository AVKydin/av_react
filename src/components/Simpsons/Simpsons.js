import React from 'react';

import Simpson from "../Simpson/Simpson";

const Simpsons = ({simpsons}) => {
    return (
        <div>
            {simpsons.map((simpson, index)=><Simpson simpson={simpson} key={index}/>)}
        </div>
    );
};

export default Simpsons;