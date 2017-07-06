import React from 'react';
import './UserDetail.css';

export default class UserDetail extends React.Component {
    constructor() {
        super();
        this.handleUserDetailClicked = this.handleUserDetailClicked.bind(this);
    }

    handleUserDetailClicked(){
        this.props.handleRoute("UserDetail");
    }

    render() {
        return (
            <div className="userDetailContainer">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h3 className="panel-title">Mike</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src="http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png" className="img-circle img-responsive"/>
                                    </div>
                                    <div className=" col-md-9 col-lg-9 ">
                                        <table className="table table-user-information">
                                            <tbody>
                                            <tr>
                                                <td>User name:</td>
                                                <td>MM123</td>
                                            </tr>
                                            <tr>
                                                <td>Top Role:</td>
                                                <td>photographer</td>
                                            </tr>
                                            <tr>
                                                <td>Joined date:</td>
                                                <td>27/06/2017</td>
                                            </tr>
                                            <tr>
                                                <td>Date of Birth</td>
                                                <td>01/24/1988</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>Female</td>
                                            </tr>
                                            <tr>
                                                <td>Address</td>
                                                <td>Hamilton</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td><a href="#">123@gmm.com</a></td>
                                            </tr>
                                            <tr>
                                                <td>Phone Number</td>
                                                <td>021-022 12345</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" >Change Password</a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-footer">
                                <a data-original-title="Broadcast Message" data-toggle="tooltip" type="button" className="btn btn-sm btn-primary"><i className="glyphicon glyphicon-envelope"></i></a>

                                <span className="pull-right">
                                <a href="#" data-original-title="Edit this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-warning"><i className="glyphicon glyphicon-edit"></i></a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}