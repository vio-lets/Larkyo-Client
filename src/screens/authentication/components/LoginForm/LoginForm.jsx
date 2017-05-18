import React from 'react';
import {withRouter} from 'react-router-dom';
import {Form} from 'semantic-ui-react';
import {Col,FormGroup,ControlLabel,FormControl} from 'react-bootstrap'
import {authService, clearToken, setToken} from '../../../../services';
import User from '../../../../models/User';

class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
    }

    handleChange (event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    loadTokenQuery (userName, password) {
        var _this = this;
        authService.postAccessTokenQuery(userName, password)
            .then((res) => res.data)
            .then(function (data) {
                setToken(data.access_token);
                User.isLogin = true;
                User.hasToken = true;
                alert('login in success');
                _this.props.history.push('/');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onLoginFormSubmit (event) {
        event.preventDefault();
        const {username, password} = this.state;
        this.loadTokenQuery(username, password);
    }

    render () {
        return (
            <div className="col-xs-12 no-padding">
                <Form onSubmit={this.onLoginFormSubmit}>
                    <Form.Field>
                        <label htmlFor="username">First Name</label>
                        <input placeholder='Enter Username' type='text' name='username' id="username"
                               value={this.state.username}
                               onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password">Password</label>
                        <input placeholder='Enter Password' type='password' name='password' id="password"
                               value={this.state.password}
                               onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Button className="pull-right" content='Submit' basic color='green'/>
                    </Form.Field>
                </Form>
            </div>
        );
    }
}

export default withRouter(LoginForm);