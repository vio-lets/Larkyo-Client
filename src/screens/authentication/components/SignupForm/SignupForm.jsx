import React from 'react';
import {withRouter} from 'react-router-dom';
import {Form, Message} from 'semantic-ui-react';
import {Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import {userSerivce, setToken} from '../../../../services';
import User from '../../../../models/User';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            rePassword: '',
            invalidPassword: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSignUpFormSubmit = this.onSignUpFormSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    postSignUpUserQuery(userName, password, rePassword) {
        userSerivce.postCreateUserQuery(userName, password,rePassword)
            .then(function (data) {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    isValidassword(password, rePassword) {
        if (password.length < 6 && rePassword.length < 6 && password === rePassword) {
            return false;
        }
        return true;
    }

    onSignUpFormSubmit(event) {
        event.preventDefault();
        const {username, password, rePassword} = this.state;
        if (this.isValidassword(password, rePassword)) {
            alert(password + "==" + rePassword)
            this.setState({invalidPassword: false});
            this.postSignUpUserQuery(username,password,rePassword)
        } else {
            this.setState({invalidPassword: true});
        }

    }

    render() {
        return (
            <div className="col-xs-12 no-padding">
                {this.state.invalidPassword &&
                <Message error header='Invalid password'
                         content="Please repeat your password"
                />
                }

                <Form onSubmit={this.onSignUpFormSubmit}>
                    <Form.Field required>
                        <label htmlFor="username">First Name</label>
                        <Form.Input placeholder='Enter Username' type='text' name='username' id="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field required>
                        <label htmlFor="password">Password</label>

                        <Form.Input placeholder='Enter Password' type='password' name='password' id="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    error={this.state.invalidPassword}/>
                    </Form.Field>
                    <Form.Field required>
                        <label htmlFor="rePassword">Confirm Password</label>
                        <Form.Input placeholder='Confirm Password' type='password' name='rePassword' id="rePassword"
                                    value={this.state.rePassword}
                                    onChange={this.handleChange}
                                    error={this.state.invalidPassword}/>

                    </Form.Field>
                    <Form.Field>
                        <Form.Button className="pull-right" content='Sign Up' basic color='green'/>
                    </Form.Field>
                </Form>
            </div>
        );
    }
}

export default withRouter(SignupForm);