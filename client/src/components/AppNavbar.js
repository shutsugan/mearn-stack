import React, {Component} from 'react';
import {
  Collapse, Navbar, NavbarToggler,
  NavbarBrand, Container,
  Nav, NavItem, NavLink
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = _ => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return(
      <div>
        <Navbar
          color="dark"
          dark
          expand="sm"
          className="Navbar mb-5">
          <Container>
            <NavbarBrand href="/">Shoping List</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse
              isOpen={this.state.isOpen}
              navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
