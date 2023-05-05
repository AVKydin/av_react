import React from 'react';
import {useSelector} from "react-redux";

import {CarForm, Cars} from "../components";

const CarsPage = () => {
    const {error, loading} = useSelector(state => state.cars);
    return (
        <div>
            <CarForm/>
            {error&&<h1>{JSON.stringify(error)}</h1>}
            {loading&&<h1>Loading...</h1>}
            <Cars/>
        </div>
    );
};

export {
    CarsPage
};