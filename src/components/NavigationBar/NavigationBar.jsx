import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, ButtonToolbar, Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import './styles.css'

class NavigationBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            activeKey: '/'
        };
        this.register = this.register.bind(this);
        this.navigate = this.navigate.bind(this);
    }

    register () {
        alert('Register clicked');
    }

    navigate (eventKey) {
        this.setState({activeKey: eventKey});
        this.props.history.push(eventKey);
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
                    <Nav activeKey={this.state.activeKey} onSelect={this.navigate}>
                        <NavItem eventKey="/">Home</NavItem>
                        <NavItem eventKey="/plan">Plan</NavItem>
                        <NavItem eventKey="/team">Team</NavItem>
                    </Nav>
                    <Nav pullRight className="customNavItems" style={{padding: '0px'}}>
                        <NavItem eventKey="/team">
                            <ButtonToolbar>
                                <Button bsStyle="danger" className="navbar-btn" onClick={this.register}><Glyphicon
                                    glyph="user"/> Register</Button>
                                <Button bsStyle="info" className="navbar-btn"
                                        onClick={() => {this.navigate('/signin');}}><Glyphicon glyph="log-in"/> Sign In</Button>
                            </ButtonToolbar>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(NavigationBar);