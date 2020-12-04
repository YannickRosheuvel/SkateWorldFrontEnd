import React, { Component, useContext, Redirect } from 'react';
import { UserContext } from './UserContext';
import {HomeInfo} from './HomeInfo';
import {UserLoggedCheck} from './UserLoggedCheck';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { firstname: '', lastname: ''};
    }

    componentDidMount() {
        this.getLoggedUser();
        console.log(this.context);
    }


    
    async getLoggedUser() {
        const response = await fetch('https://localhost:44355/api/home' + localStorage.getItem("user"));
        const data = await response.json();
        console.log(data);
        this.setState({ firstname: data.firstname, lastname: data.lastname});
    }

    // static CompletedOrNot = () => {
    //     if(this.user.firstname != ""){
    //         return <h1>Welcome back {this.user.firstname + this.user.lastname}!</h1>
    //     }
    //     else{
    //         return <h1>Please log in...</h1>
    //     }
    // }

    render() {
        return (
            <div>
                <HomeInfo></HomeInfo>
            </div>
        );
    }
}


