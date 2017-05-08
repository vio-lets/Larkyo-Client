import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import '../../styles/home.scss' // import this component styling only, if necessary
import {authService,setToken,clearToken} from '../../service'
import {User} from '../../models/User'

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.loadTokenQuery = this.loadTokenQuery.bind(this);
  }

  loadTokenQuery(userName,password) {
    authService.postAccessTokenQuery(userName,password)
      .then((res)=>res.data)
      .then(function (data) {
        setToken(data.access_token);
        User.isLogin=true;
        alert('login in success')
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  _onUserLoginSubmit = (event) => {
    event.preventDefault();

    let userName = event.target.username.value;
    let password = event.target.password.value;

    this.loadTokenQuery(userName, password);
  };

  logout(event,replace) {
    event.preventDefault();
    clearToken()
    console.log(replace)
  }

  render() {
    return (
      <div className="">
        <h1 className="">Login Page</h1>
        <Link to="/" className="btn btn-default"><i className="fa fa-home"></i>
          Home Page &rarr;</Link>

        <form onSubmit={this._onUserLoginSubmit}>
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
