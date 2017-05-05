import React from "react";
import { Link } from "react-router";
import { Alert , Well} from 'react-bootstrap'; // import boostrap componets
import axios from 'axios'

export default class AboutUs extends React.Component {

  constructor(props) {
    super(props);
  }

  onBtnClick(){
    let authorizationHeader = "Bearer " + localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = authorizationHeader;
    let url="/Accounts/Users"
    axios.get(url)
      .then(res=>res.data)
      .then(function (res) {
        console.log(res);
        this.props.users = res;
      }).catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="">
        <h1 className="">About Page</h1>
        <Link to="/" className="btn btn-default">
          <i className="fa fa-home"></i>
          Home Page &rarr;</Link>

        <button onClick={this.onBtnClick}>Users</button>
        {this.props.users}
      </div>
    );
  }
}
