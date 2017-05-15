import React from 'react';
import { withRouter } from 'react-router-dom';
// import {Button, Col, FormControl, FormGroup, Glyphicon, Grid, InputGroup, Row, Thumbnail} from 'react-bootstrap';
import { Form } from 'semantic-ui-react'
import {authService, setToken, clearToken} from '../../../services'
import {User} from '../../../models/User'

class LoginForm extends React.Component {

    state = { username: '', password: '' }
    constructor(props, context) {
        super(props, context);
        this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this)
        this.loadTokenQuery = this.loadTokenQuery.bind(this)

    }
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    loadTokenQuery(userName, password) {
        authService.postAccessTokenQuery(userName, password)
            .then((res)=>res.data)
            .then(function (data) {
                setToken(data.access_token);
                User.isLogin = true;
                User.hasToken = true;
                alert('login in success')
                this.props.history.push('/');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onLoginFormSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state
        this.loadTokenQuery(username, password);
    }

    logout(event, replace) {
        event.preventDefault();
        clearToken()
        console.log(replace)
    }

    render() {
        const { username, password } = this.state
        return (
        <div>
            <Form onSubmit={this.onLoginFormSubmit}>
                <Form.Group>
                    <Form.Input placeholder='Enter Username' type='text' name='username' value={username} onChange={this.handleChange} />
                    <Form.Input placeholder='Enter Password' type='password' name='password' value={password} onChange={this.handleChange} />
                    <Form.Button content='Submit' />
                </Form.Group>
            </Form>
        </div>
        );
    }
}

export default withRouter(LoginForm);