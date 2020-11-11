import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return <h1>Welcome back {this.props.name}!</h1>;
    }
}
