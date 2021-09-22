import React from 'react'
import { Redirect, Route } from "react-router-dom";
import {useSelector} from 'react-redux'

const PrivateRouteP = ({component:Component, ...rest}) => {
    const isAuth = localStorage.getItem("token");
    if(isAuth){
        return <Route component={Component}{...rest}/>

    }
    return <Redirect path="/signIn" />;

};
export default PrivateRouteP