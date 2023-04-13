import React from 'react';

const SpaceXLaunch = ({launch}) => {

    return (
        <div className={'launch'}>

            <p > {launch.mission_name}</p>
            <p > {launch.launch_year}</p>
           <img src={launch.links.mission_patch_small}
                alt={launch.mission_name}/>



        </div>
    );
};

export default SpaceXLaunch;