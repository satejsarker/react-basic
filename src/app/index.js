import React from "react";
import { render } from "react-dom";
import { Header } from "./componets/header";
import { Home } from "./componets/home"

import PropTypes from 'prop-types'

let user = {
    name: "GUNJAN",
    hobbies: ["sports","traveling"]
};

class App extends React.Component {



    render() {
       
        var list = [
            "a", 'b', 'c', 'd', 'e', 'f'
        ];
        return ( <div className = "container" >
            <div className = "row" >
            <div className = "col-xs-10 col-xs-offset-1" >
            <Header / >
            </div> </div >

            <div className = "row" >
            <div className = "col-xs-10 col-xs-offset-1" >
            <Home name = { "satej sarker" } initialage={23}/> 
           
            
            </div> 
            </div >
             
        </div >
        );
    }
}


render( < App user={user} / > , window.document.getElementById("app"));