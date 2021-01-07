import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter} from 'react-router-dom';
import './NavMenu.css';

class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };

    this.state = { user: '' };
  }

  CheckUser(props){
    if(localStorage.getItem("user") === null){
      window.location.reload();
    }
  }

  componentDidMount() {
    if(localStorage.getItem("user") === null){
      this.props.history.push('./Login')
    }
    this.populateCourseData();
  }

  logout(){
    localStorage.clear();
    window.location.reload();
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  static HideOrNot(){
    if(localStorage.getItem("user") === null){
      return null
    }
    else{
      return <NavMenu />
    }
  }

  async populateCourseData() {
    try{
        const response = await fetch('https://localhost:44355/api/user/' + localStorage.getItem("user") + '/user');
        const data = await response.json();
        this.setState({ user: data });
        console.log(data);
    }
    catch{
        this.setState({ error: true});
    }
}

  render () {
    let contents = NavMenu.HideOrNot();
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
          <NavbarBrand tag={Link} to="/"><img></img></NavbarBrand>
            <NavbarBrand tag={Link} to="/"><img  src={'/img/SkateLogo1.png' } width="27px"/>SkateWorld</NavbarBrand>
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
                <NavLink tag={Link} className="text-dark" to="/Chat">Comment</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-dark" onClick={this.logout}>Logout</NavLink>
                </NavItem>
                <NavItem>
                <NavLink>Level: {this.state.user.level}</NavLink>
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