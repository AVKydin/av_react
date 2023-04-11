import React from 'react';

import RickAndMortyPers from "../RickAndMortyPers/RickAndMortyPers";




const Rickandmorty = ({rickAndMorty}) => {
    return (
        <div>
            {rickAndMorty.map((rickAndMorty, index)=><RickAndMortyPers rickAndMortyPers={rickAndMorty} key={index}/>)}
        </div>
    );
};

export default Rickandmorty;