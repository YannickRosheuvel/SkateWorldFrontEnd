import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Register extends Component {
    static displayName = Register.name;

    constructor(props) {
        super(props);
        this.state = { emailadress: '', password: '', address: '', city: '', province: '',zip: '' };
    }

    componentDidMount() {

    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
        console.log(event.target.value)
    }

    RegisterUser = event => {
        event.preventDefault();
        console.log("hello")
        axios.post('https://localhost:44355/api/user/{id}/register', { emailadress: this.state.emailadress,
         password: this.state.password, address: this.state.address, city: this.state.city, province: this.state.province, zip: this.state.zip })
            .then(response =>
            {
                if (response.data.id !== 0) {
                    alert("Login succesfull!")
                }
            console.log(response)
        })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
<Form onSubmit={this.RegisterUser}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input onChange={this.handleInputChange } type="email" name="emailadress" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input onChange={this.handleInputChange } type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input onChange={this.handleInputChange } type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input onChange={this.handleInputChange } type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">Province</Label>
            <Input onChange={this.handleInputChange } type="text" name="province" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input onChange={this.handleInputChange } type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <button type="submit" class="btn btn-primary">Register</button>
      <td><Link to={{
        pathname: '/login',
        }}>Login</Link></td>
    </Form>
        );
    }
}