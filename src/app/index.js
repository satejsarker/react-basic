import React from "react";
import { render } from "react-dom";
import { Header } from "./componets/header";
import { Home } from "./componets/home"

import PropTypes from 'prop-types'

class App extends React.Component {
    render() {
        var info = {
            name: "GUNJAN",
            hobbies: ["sports"]
        };
        var list = [
            "a", 'b', 'c', 'd', 'e', 'f'
        ];
        return ( < div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-xs-10 col-xs-offset-1" >
            <
            Header / >
            <
            /div> </div >

            <
            div className = "row" >
            <
            div className = "col-xs-10 col-xs-offset-1" >
            <
            Home name = { "satej sarker" }
            info = { info }
            list = { list }
            mobile = { '01672089143' }
            /> <
            Home / >
            <
            /div> </div > < /div >
        );
    }
}


render( < App / > , window.document.getElementById("app"));