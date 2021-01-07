import React, { Component } from 'react';
import { Container } from 'reactstrap';
import  NavMenu  from './NavMenu';
import {withRouter} from 'react-router-dom';

export class Layout extends Component {
  static displayName = Layout.name;

  static HideOrNot(){
    if(localStorage.getItem("user") === null){
      return null
    }
    else{
      return <NavMenu />
    }
  }

  
  // componentDidMount() {
  //   if(localStorage.getItem("user") === null){
  //     console.log("null")
  //     this.props.history.push('./Login')
  //   }
  // }

  render () {
    let nav = Layout.HideOrNot();
    return (
      <div>
        {nav}
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

// export default withRouter(Layout)