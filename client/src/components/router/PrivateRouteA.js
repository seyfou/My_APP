import React from 'react'
import { Redirect, Route } from "react-router-dom";
import {useSelector} from 'react-redux'



 const PrivateRouteA = ({component:Component, ...rest}) => {
    const isAuth = localStorage.getItem("token");
    const user= useSelector(state => state.userReducer.user)
    if (isAuth){
    if(user){ if(user.isAdmin){
          return <Route component={Component}{...rest}/>

      }}
     
    }return <Redirect to="/" />;

 }

export default PrivateRouteA

