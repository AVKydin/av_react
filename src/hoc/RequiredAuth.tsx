import React, {FC, ReactElement} from 'react';
import {authService} from "../services";
import {Navigate} from "react-router-dom";

interface IPops{
    children:ReactElement
}
const RequiredAuth:FC<IPops> = ({children}) => {
    const accessToken = authService.getAccessToken();

    if(!accessToken){
        return <Navigate to={'/login'}/>
    }

    return children
};

export {
    RequiredAuth
};