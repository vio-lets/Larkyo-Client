import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './../styles/app.scss'//do not need to import in child components.
axios.defaults.baseURL = 'http://localhost:31460/api';
export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="container">
        <div className="container-fluid border bg-red">
          {this.props.children}
        </div>
      </div>
    )
  }
}
