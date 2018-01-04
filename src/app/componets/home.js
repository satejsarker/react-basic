import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialage,
            status:0
        };
        setTimeout(()=>{
            this.setState({
                status:1
            });
        }, 3000);
    }

    onMakeOlder() {
        this.setState({
            age:this.state.age+3
        }); 
    }

    render() {
    

        return ( < div >
            <p> new components </p> 
            <p>STATUS: {this.state.status}</p>

            <p> { this.props.name }
            age: { this.state.age } < /p>  <
            hr / >
            <
            button className = "btn btn-primary"
            onClick = {
                () => this.onMakeOlder()
            } > make me older <
            /button>

            <
            /div>
        );
    }
}



Home.PropTypes = {
    name: React.PropTypes.string,

    age: React.PropTypes.number

}