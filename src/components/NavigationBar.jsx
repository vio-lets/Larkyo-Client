import React from 'react'
import {Link} from 'react-router-dom'
import {Button, ButtonToolbar, Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap'

class NavigationBar extends React.Component {
    signIn() {
        alert('Sign in clicked')
    }

    register() {
        alert('Register clicked')
    }

    render() {

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
                        <ul className="navigation header">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/plan">Plan</Link></li>
                            <li><Link to="/team">Team</Link></li>
                        </ul>

                        {/*<NavItem eventKey="first"><Link to="/">Home</Link></NavItem>*/}
                        {/*<NavItem eventKey="second"><Link to="/plan">Plan</Link></NavItem>*/}
                        {/*<NavItem eventKey={3} href="#"><Link to="/team">Team</Link></NavItem>*/}

                        {/*<NavItem eventKey={1} href="/">Home</NavItem>*/}
                        {/*<NavItem eventKey={2} href="#/plan">Plan</NavItem>*/}
                        {/*<NavItem eventKey={3} href="/team">Team</NavItem>*/}

                    </Nav>
                    <Nav pullRight>
                        <ButtonToolbar>
                            <Button bsStyle="danger" className="navbar-btn" onClick={this.register}><Glyphicon
                                glyph="user"/> Register</Button>
                            <Button bsStyle="info" className="navbar-btn" onClick={this.signIn}><Glyphicon
                                glyph="log-in"/> Sign In</Button>
                        </ButtonToolbar>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar