import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { isLogin } from '../Utils/Index';

function Publicroute({component:Component,restricted=false,...rest}) {
    return (

      <Route {...rest} render={props=> (
      isLogin() && restricted ?
      <Redirect to ={"/"} />
      :
      <Component {...props}/>
     
      )}
      />
    )
      }
     


export default Publicroute;