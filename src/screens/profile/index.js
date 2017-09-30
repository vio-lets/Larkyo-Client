import React from 'react';
import { UserProfile, UserDetail} from './components';
import './index.css';

export default class Profile extends React.Component {
    constructor(...args){
        super(...args);
        this.redirectPage = this.redirectPage.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
        this.handleUserDetail = this.handleUserDetail.bind(this);
        this.state = {
            selectedPage:"UserProfile"
        }
    }

    renderPage() {
        switch(this.state.selectedPage){
            case "UserDetail":
                return(<UserDetail handleRoute={this.redirectPage}/>);
                break;
            case "UserProfile":
                return(<UserProfile handleRoute={this.redirectPage}/>);
                break;
            default:
                return(<UserProfile handleRoute={this.redirectPage}/>);
        }
    };

    handleProfile() {
        this.setState({selectedPage:"UserProfile"})
    }
    handleUserDetail() {
        this.setState({selectedPage:"UserDetail"})
    }

    redirectPage(pageName){
        this.setState({selectedPage:pageName})
    }

    render () {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="optionListContainer">
                        <ul className="list-group">
                            <li className="list-group-item"><a href="#" onClick={this.handleProfile}>Profile</a></li>
                            <li className="list-group-item"><a href="#" onClick={this.handleUserDetail}>UserDetail</a></li>
                            <li className="list-group-item"><a href="#">Edit Profile</a></li>
                        </ul>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default leftBar">
                                <a href="http://placeholder.com"><img src="http://via.placeholder.com/263x263"/></a>
                                <div className="panel-heading">
                                    <h5 className="panel-title">MM123 <br></br>
                                        Female<br></br>
                                        New Zealand<br></br>
                                        123@gmm.com</h5>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-group">
                                        <li className="list-group-item"><a href="">credit: 300</a></li>
                                        <li className="list-group-item"><a href="#">Photographer: 12times</a></li>
                                        <li className="list-group-item"><a href="#">Cook: 3times</a></li>
                                        <li className="list-group-item"><a href="#">Driver: 1times</a></li>
                                        <li className="list-group-item"><a href="#" onClick={this.handleUserDetail}>User Detail</a></li>
                                        <text>Plan involved: </text>
                                        <li className="list-group-item"><a href="#">Amazing trip of 3.03 room</a></li>
                                        <li className="list-group-item"><a href="#">Best tour of Panmure Library</a></li>
                                        <text>Wish List </text>
                                        <li className="list-group-item"><a href="#">3 days of Hamilton</a></li>
                                        <li className="list-group-item"><a href="#">North Island bike one month adventure </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    {this.renderPage()}
                </div>
            </div>
        );
    }
}