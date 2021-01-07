import React, { Component, useContext, Redirect } from 'react';
import { Jumbotron, Button } from 'reactstrap';

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
                    <div>
                    <Jumbotron>
                      <h1 className="display-3">Welcome back, {firstname} {lastname}</h1>
                      <p className="lead">This is Skateworld! made by skateboarders, for skateboarders</p>
                      <hr className="my-2" />
                      <p></p>
                      <p className="lead">
                        <Button color="primary">Learn More</Button>
                      </p>
                    </Jumbotron>
                  </div>
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



