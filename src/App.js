import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Registration from "../src/containers/RegistrationReduxForm";
import './App.scss';



export default class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>                
                    <Route exact path="/" component={Registration}/>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        )
    }
}


  

