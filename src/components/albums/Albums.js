import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services/albums.service";
import Album from "../album/Album";

const Albums = () => {
    let [albums, setAlbums] = useState([]);
    useEffect(()=>{
        albumsService.getAll().then(value => value.data).then(value => setAlbums(value))
    },[])

    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export {
    Albums
};