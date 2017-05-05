import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import '../../styles/home.scss' // import this component styling only, if necessary
import axios from 'axios'

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {someUser:this.context.someUser}
  }

  loadTokenQuery = (formData) => {
    console.log(formData)
    let url = "http://localhost:31460/oauth/token";
    let params = new URLSearchParams();
    params.append('username', formData.username);
    params.append('password', formData.password);
    params.append('grant_type', "password");

    axios.post(url, params)
      .then(function (res) {
        console.log(res);
        console.log(res.data);
        localStorage.setItem('token',res.data.access_token)

      }).catch(function (error) {

      console.log(error);
    });

  }


  _handleSubmit = (event) => {
    event.preventDefault();
    let formData = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    this.loadTokenQuery(formData);
  };

  logout(event)
  {
    event.preventDefault();
    localStorage.clear();
    this.props.history.pushState(null,'/')
  }
  render() {
    return (
      <div className="">
        <h1 className="">Login Page</h1>
        <Link to="/" className="btn btn-default"><i className="fa fa-home"></i>
          Home Page &rarr;</Link>

        <form onSubmit={this._handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            type="text"
            name="password"
            placeholder="password"
          />
          <input type="submit" value="Submit"/>
        </form>
        <a className="btn btn-default" onClick={this.logout}>Log out</a>
      </div>
    );
  }
}
