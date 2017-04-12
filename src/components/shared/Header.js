/**
 * Created by Clyde-Desktop on 11/04/2017.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import {Navbar} from "react-bootstrap"
import {Nav} from "react-bootstrap"
import {NavItem} from "react-bootstrap"

export default class Header extends Component {
    render() {
        return (
            <header>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Home</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#/login">Login</NavItem>
                        <NavItem eventKey={2} href="#/aboutus">About Us</NavItem>
                        <NavItem eventKey={2} href="#/contactus">Contact Us</NavItem>
                    </Nav>
                </Navbar>
            </header>
        );
    }
}
