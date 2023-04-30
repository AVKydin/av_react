import React from 'react';
import {useSelector} from "react-redux";

import css from '../component.module.css'


const Cars = () => {
    const state = useSelector(state => state);
    return (
        <div className={css.Main}>
            <div>
                {state.cars.map(car =>
                    <div className={css.Car} key={car.id}>
                        <div>{car.brand} - {car.price}</div>
                    </div>)}
            </div>
        </div>
    );
};

export default Cars;