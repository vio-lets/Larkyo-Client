import React from "react";
import { Link } from 'react-router';
import '../../styles/home.scss' // import this component styling only, if necessary


export default React.createClass({
  render() {
    return (
      <div className="">
        <h1 className="">Home Page</h1>
        <Link to="/about" className="btn btn-default">About page &rarr;</Link>
        <Link to="/login" className="btn btn-default">Login page &rarr;</Link>

      </div>
    );
  }
});
