import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export class CommentSection extends Component {
    static displayName = CommentSection.name;

    constructor(props) {
        super(props);
        this.state = { emailadress: '', password: '', address: '', city: '', province: '',zip: '' };
    }

    componentDidMount() {

    }


    render() {
        return (
            <form>
            <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <button type="submit"  class="btn btn-primary">Submit</button>
          </form>
        );
    }
}