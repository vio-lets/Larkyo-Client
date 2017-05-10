import React from "react";
import {Link} from "react-router";

export default class Topbar extends React.Component {

  constructor(props) {
    super(props);
    this.toggleSidebarVisibility = this.toggleSidebarVisibility.bind(this);
  }

  toggleSidebarVisibility() {
    this.props.toggleSidebar()
  }

  render() {
    return (
      <div id="topbar" className="navbar-fixed-top">
        <div className="container-fluid">
          <i className="fa fa-bars" onClick={this.toggleSidebarVisibility}></i>
        </div>
      </div>

    );
  }
}
