import React from 'react';
import { withRouter } from 'react-router-dom';
import { clearToken } from './../../services';
import { Button, ButtonToolbar, Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import './styles.css';
import * as ReactBootstrap from 'react-bootstrap';

class NavigationBar extends React.Component {
    constructor (...args) {
        super(...args);
        this.state = {
            activeKey: '/',
            userLoggedIn: this.props.userLoggedIn
        };
        this.register = this.register.bind(this);
        this.onLogoutBtnClick = this.onLogoutBtnClick.bind(this);
        this.navigate = this.navigate.bind(this);
        this.handleSearchClicked = this.handleSearchClicked.bind(this);

    }

    register () {
        alert('Register clicked');
    }

    navigate (eventKey) {
        this.setState({activeKey: eventKey});
        this.props.history.push(eventKey);
    }

    onLogoutBtnClick () {
        clearToken();
        this.setState({activeKey: '/'});
        this.props.history.push('/');
    }

    handleSearchClicked(){
        this.navigate('/search');
    }

    render () {
        let Navbar = ReactBootstrap.Navbar;
        let Nav = ReactBootstrap.Nav;
        let NavItem = ReactBootstrap.NavItem;
        let NavDropdown = ReactBootstrap.NavDropdown;
        let MenuItem = ReactBootstrap.MenuItem;

        const signOutButton =
            <NavItem>
                <Button bsStyle="info" className="navbar-btn"
                        onClick={() => {
                            this.props.loginStateHandler(false);
                            this.navigate('/');
                        }}><Glyphicon glyph="log-out"/> Sign Out</Button>
            </NavItem>;

        const signInButton =
            <NavItem>
                <ButtonToolbar>
                    <Button bsStyle="danger" className="navbar-btn"
                            onClick={this.register}><Glyphicon glyph="user"/> Register</Button>
                    <Button bsStyle="info" className="navbar-btn"
                            onClick={() => {this.navigate('/signin');}}><Glyphicon glyph="log-in"/> Sign
                        In</Button>
                </ButtonToolbar>
            </NavItem>;

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
                        {
                            this.props.userLoggedIn &&
                            <NavItem eventKey="/plan">Plan</NavItem>
                        }
                        {
                            this.props.userLoggedIn &&
                            <NavItem eventKey="/profile">Profile</NavItem>
                        }
                        {
                            this.props.userLoggedIn &&
                            <NavItem eventKey="/team">Team</NavItem>
                        }
                        {
                            this.props.userLoggedIn &&
                            <NavItem eventKey="/findPeople">Find People</NavItem>
                        }
                        {
                            this.props.userLoggedIn &&
                            <NavItem eventKey="/findThings">Find Things to Do</NavItem>
                        }
                        {
                            this.props.userLoggedIn &&
                            <NavItem eventKey="/findPlace">Find Place to Go</NavItem>
                        }
                        {
                            this.props.userLoggedIn &&
                            <NavItem eventKey="/planTrip">Plan a Trip</NavItem>
                        }
                    </Nav>
                    <Nav pullRight className="customNavItems" style={{padding: '0px'}}>
                        {
                            this.props.userLoggedIn
                                ? signOutButton
                                : signInButton
                        }
                    </Nav>
                    <Nav pullRight className="customNavItems" style={{padding: '0px', 'marginTop':'8px', 'marginBottom':'0px', 'marginRight':'10px'}}>
                        <NavItem eventKey="/search">
                            <input type="text" className="form-control" placeholder="Search" onClick={this.handleSearchClicked}/>
                        </NavItem>;

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(NavigationBar);