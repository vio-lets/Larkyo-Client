import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './../styles/app.scss'//do not need to import in child components.
import {User,AA} from '../common/User'
axios.defaults.baseURL = 'http://localhost:31460/api';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateUserState = this.updateUserState.bind(this)
  }

  updateUserState(userState) {
    console.log(userState)
  }

  render() {
    return (
      <div id="container">
        <div className="container-fluid border bg-red">
          {React.cloneElement(this.props.children, {...this.props})}
        </div>
      </div>
    )
  }
}
