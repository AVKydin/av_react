import React, {useEffect, useState} from 'react';
import SpaceXLaunch from "../SpaceXLaunch/SpaceXLaunch";

const SpaceX = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(launches => setLaunches(launches))
    }, [])

    const launchFilter = launches.filter((launch)=>{
        return launch.launch_year!=='2020'
    })

    return (
        <>
            {launchFilter.map((launch)=>{
                return < SpaceXLaunch launch={launch} key={launch.flight_number}/>})}
        </>
    );
};

export default SpaceX;