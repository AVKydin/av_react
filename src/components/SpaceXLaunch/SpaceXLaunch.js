import React from 'react';

const SpaceXLaunch = ({launch}) => {
    console.log(launch)
    return (
        <div className={'launch'}>

            <p > {launch.mission_name}</p>
            <p > {launch.launch_year}</p>
           <img src={launch.links.mission_patch_small}/>



        </div>
    );
};

export default SpaceXLaunch;