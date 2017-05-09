import React from 'react'
import { Button, ButtonToolbar, Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap'

class NavigationBar extends React.Component {
  signIn () {
    alert('Sign in clicked')
  }

  register () {
    alert('Register clicked')
  }

  render () {

    return (
      <Navbar inverse fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <span>Larkyo</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem active={true} eventKey={1} href="#"ß>Home</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
        </Nav>
        <Nav pullRight>
          <ButtonToolbar>
            <Button bsStyle="danger" className="navbar-btn" onClick={this.register}><Glyphicon glyph="user" /> Register</Button>
            <Button bsStyle="info" className="navbar-btn" onClick={this.signIn}><Glyphicon glyph="log-in" /> Sign In</Button>
          </ButtonToolbar>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar