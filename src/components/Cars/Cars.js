import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [carDelete, setCarDelete] = useState(null)

    useEffect(()=> {

            carService.getAll().then(value => value.data).then(cars => setCars(cars))

    },[allCars, carForUpdate, carDelete])

    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} carDelete={carDelete} setCarDelete={setCarDelete}/>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setCarDelete={setCarDelete}/>)}
        </div>
    );
};

export default Cars;