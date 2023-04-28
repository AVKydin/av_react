import { useDispatch } from "react-redux";

import './styles/header.css'
import {carsService, commentsService, usersService} from "./axios/axios.service";
import Cars from "./components/Cars";
import Users from "./components/Users";
import Comments from "./components/Comments";


const App = ()=> {


   const dispatch = useDispatch();

        const onCars=()=>{
            carsService.then(value => dispatch({type:'SET_CARS', payload:value}))

        };

        const onUsers=()=>{
            usersService.then(value => dispatch({type:'USERS', payload:value}))
        }

        const onComments=()=>{
            commentsService.then(value => dispatch({type:'COMMENTS', payload:value}))
        }

    return (
        <div className={'header'}>

            <div className={'nav'}>
                <button onClick={onCars}>Cars</button>
                <button onClick={onUsers}>Users</button>
                <button onClick={onComments}>Comments</button>
            </div>
            <Cars/>
            <Users/>
            <Comments/>
        </div>
    );
}

export default App;
