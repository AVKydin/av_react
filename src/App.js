import {useDispatch, useSelector} from "react-redux";

import './styles/header.css'
import {useEffect} from "react";
import {carsService} from "./axios/axios.service";


const App = ()=> {

   const state = useSelector(state => state);
   const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type:'START'})
        carsService.then(value => dispatch({type:'SET_CARS', payload:value}))
    },[])


    return (
        <div className={'header'}>
            <div className={'nav'}>
                {state.isLoading && <h2>Loading...</h2>}
            </div>
            {state.cars.map(car=><div key={car.id}>{car.brand}</div>)}
        </div>
    );
}

export default App;