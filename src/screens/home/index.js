import React from 'react';
import {Banner} from './components'
import {Button, ButtonToolbar} from 'react-bootstrap'

export default class Home extends React.Component {
    signIn() {
        alert("Sign in clicked")
    }

    register() {
        alert("Register clicked")
    }

    render() {
        return (
            <div>
                <Banner />

                <ButtonToolbar>
                    <Button bsStyle="primary" onClick={this.signIn}>Sign In</Button>
                    <Button bsStyle="primary" onClick={this.register}>Register</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

