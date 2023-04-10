import React from 'react';
import RickAndMortyPers from "../RickAndMortyPers/RickAndMortyPers";




const Rickandmorty = ({rickAndMorty}) => {
    return (
        <div>
            {rickAndMorty.map((rickAndMorty)=><RickAndMortyPers rickAndMortyPers={rickAndMorty}/>)}
        </div>
    );
};

export default Rickandmorty;