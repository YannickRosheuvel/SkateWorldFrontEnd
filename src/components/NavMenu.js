import React, { Component, Redirect } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import './NavMenu.css';

class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  CheckUser(props){
    if(localStorage.getItem("user") === null){
      this.props.history.push('./Login')
    }
    console.log(localStorage.getItem("user"));
    console.log(props);
  }

  componentDidMount() {
    this.CheckUser();
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar onClick={this.CheckUser} className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">SkateWorld</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/courses">Courses</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Chat">Comment Section</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default withRouter(NavMenu)