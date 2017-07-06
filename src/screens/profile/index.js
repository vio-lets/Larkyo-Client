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
                </div>
                <div className="col-md-9">
                    {this.renderPage()}
                </div>
            </div>
        );
    }
}