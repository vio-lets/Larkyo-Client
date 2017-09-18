import React from 'react';
import {withRouter} from 'react-router-dom';
import {clearToken} from './../../services';
import {Button, ButtonToolbar, DropdownButton, Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap';
import './styles.css';
// import * as ReactBootstrap from 'react-bootstrap';
import Inventory from './../Inventory/Inventory.jsx'

class NavigationBar extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            activeKey: '/',
            userLoggedIn: this.props.userLoggedIn,
            inventoryVisible: true,
            inventorySize: 0
        };
        this.register = this.register.bind(this);
        this.onLogoutBtnClick = this.onLogoutBtnClick.bind(this);
        this.navigate = this.navigate.bind(this);
        this.handleSearchClicked = this.handleSearchClicked.bind(this);
        this.updateInventorySize = this.updateInventorySize.bind(this);
    }

    register() {
        alert('Register clicked');
    }

    navigate(eventKey) {
        this.setState({activeKey: eventKey});
        this.props.history.push(eventKey);
    }

    onLogoutBtnClick() {
        clearToken();
        this.setState({activeKey: '/'});
        this.props.history.push('/');
    }

    handleSearchClicked() {
        this.navigate('/search');
    }

    updateInventorySize(size) {
        this.setState({
            inventorySize: size
        })
    }

    render() {
        // let Navbar = ReactBootstrap.Navbar;
        // let Nav = ReactBootstrap.Nav;
        // let NavItem = ReactBootstrap.NavItem;
        // let NavDropdown = ReactBootstrap.NavDropdown;
        // let MenuItem = ReactBootstrap.MenuItem;

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
                            onClick={() => {
                                this.navigate('/signin');
                            }}><Glyphicon glyph="log-in"/> Sign
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
                            <NavItem eventKey="/Activity">Things&Todo</NavItem>
                        }
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


                    </Nav>
                    {
                        this.props.userLoggedIn && this.state.inventoryVisible &&
                        <DropdownButton title={"inventory(" + this.state.inventorySize + ")"} id="inventoryButton">
                            <div className="fixed-width-250">
                                <Inventory updateInventorySize={this.updateInventorySize}></Inventory>
                            </div>
                        </DropdownButton>
                    }
                    <Nav pullRight className="customNavItems" style={{padding: '0px'}}>
                        {
                            this.props.userLoggedIn
                                ? signOutButton
                                : signInButton
                        }
                    </Nav>


                    <Nav pullRight className="customNavItems"
                         style={{padding: '0px', 'marginTop': '8px', 'marginBottom': '0px', 'marginRight': '10px'}}>
                        <NavItem eventKey="/search">
                            <input type="text" className="form-control" placeholder="Search"
                                   onClick={this.handleSearchClicked}/>
                        </NavItem>;

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(NavigationBar);