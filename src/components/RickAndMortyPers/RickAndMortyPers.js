import React from 'react';

const RickAndMortyPers = ({rickAndMortyPers}) => {
    return (
        <div>
            <h3>{rickAndMortyPers.name}</h3>
            <h4>{rickAndMortyPers.id}</h4>
            <h4>{rickAndMortyPers.status}</h4>
            <h4>{rickAndMortyPers.species}</h4>
            <h4>{rickAndMortyPers.gender}</h4>
            <img src={rickAndMortyPers.image} alt={rickAndMortyPers.name}></img>
        </div>
    );
};

export default RickAndMortyPers;