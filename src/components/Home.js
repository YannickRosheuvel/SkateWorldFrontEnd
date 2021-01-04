import React, { Component, useContext, Redirect } from 'react';
import { UserContext } from './UserContext';
import {HomeInfo} from './HomeInfo';
import {UserLoggedCheck} from './UserLoggedCheck';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { firstname: '', lastname: '', loading: true, error: false};
    }

    componentDidMount() {
        this.getLoggedUser();
    }


    ShowUserInfo(firstname, lastname) {
        if(firstname != ""){
            console.log(this.state.firstname)
            return <h1>Welcome back {firstname + ' ' + lastname}!</h1>
        }
        else{
            return <h1>Please log in...</h1>
        }
    }

    static renderCourseTable(firstname , lastname) {
        console.log(firstname);
        console.log(lastname);
        return (
                <thead>
                    <tr>
                        <h1 data-testid="welcome" >Welcome back {firstname} {lastname}</h1>
                    </tr>
                </thead>
        );
    }

    render() {

        // throw new Error("error")

        let contents = this.state.loading
            ? <p data-testid="loading"><em>Loading...</em></p>
            : Home.renderCourseTable(this.state.firstname, this.state.lastname);
            
            let error = this.state.error
            ? <p>there was a problem with the connection.</p>
            : <p></p>

        return (
            <div>
                {contents}
                {error}
            </div>
        );
    }

    async getLoggedUser() {
        try{
            const response = await fetch('https://localhost:44355/api/home/' + localStorage.getItem("user"));
            const data = await response.json();
            this.setState({ firstname: data.firstName, lastname: data.lastName, loading: false});
            console.log(data);
        }
        catch{
            this.setState({ error: true});
        }

    }
}



