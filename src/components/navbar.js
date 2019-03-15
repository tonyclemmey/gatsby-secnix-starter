import { Link } from "gatsby"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button } from 'reactstrap'


export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="dark" dark expand="md" fixed={`top`}>
          <NavbarBrand tag={Link} to="/">Gatsby Secnix Starter</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Item 1
                  </DropdownItem>
                  <DropdownItem>
                    Item 2
                  </DropdownItem>
                  <DropdownItem>
                    Item 3
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem style={{padding: '1px'}}>
                <Button color="primary" tag={Link} to="/contact">Phone</Button>
              </NavItem>
              <NavItem style={{padding: '1px'}}>
                <Button color="success" tag={Link} to="/contact">Email</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
