import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Login extends Component {
    static displayName = Login.name;

    constructor(props) {
        super(props);
        this.state = { courses: [], loading: true, courseCount: 0, emailadress: '', password: ''};
    }

    componentDidMount() {

    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
        console.log(event.target.value)
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("hello")
        axios.post('https://localhost:44355/api/user/{id}/login', { emailadress: this.state.emailadress, password: this.state.password })
            .then(response =>
            {
                if (response.data.id !== 0) {
                    alert("Login succesfull!")
                }
                else{
                    alert("login failed, please try again.")
                }
            console.log(response)
        })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" onChange={this.handleInputChange } name="emailadress" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" onChange={this.handleInputChange} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox"  class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit"  class="btn btn-primary">Submit</button>
                <td><Link to={{
                                pathname: '/register',
                            }}>Register</Link></td>
            </form>
        );
    }
}