import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { isLogin } from '../Utils/Index';

function Privateroute({component:Component,...rest}) {
    return (

        <Route {...rest} render={props =>(
            isLogin() ?
            <Component  {...props}/>
            :
            <Redirect to ={"/danger"}/>
           
           
        )}/>
    );
}

export default Privateroute;