import React from 'react';
import { CreateTeam, JoinTeam, MyTeam, TeamDetail } from './components';
import './index.css';

export default class Team extends React.Component {
    constructor(...args){
        super(...args);
        this.handleCreateTeam = this.handleCreateTeam.bind(this);
        this.handleMyTeam = this.handleMyTeam.bind(this);
        this.handleTeamDetail = this.handleTeamDetail.bind(this);
        this.handleJoinTeam = this.handleJoinTeam.bind(this);
        this.redirectPage = this.redirectPage.bind(this);
        this.state = {
            selectedPage:"JoinTeam"
        }
    }

    renderPage() {
        switch(this.state.selectedPage){
            case "JoinTeam":
                return(<JoinTeam handleRoute={this.redirectPage}/>);
                break;
            case "MyTeam":
                return(<MyTeam handleRoute={this.redirectPage}/>);
                break;
            case "CreateTeam":
                return(<CreateTeam handleRoute={this.redirectPage}/>);
                break;
            case "TeamDetail":
                return(<TeamDetail handleRoute={this.redirectPage}/>);
                break;
            default:
                return(<JoinTeam handleRoute={this.redirectPage}/>);
        }
    };

    handleCreateTeam() {
        this.setState({selectedPage:"CreateTeam"})
    }
    handleMyTeam() {
        this.setState({selectedPage:"MyTeam"})
    }
    handleTeamDetail() {
        this.setState({selectedPage:"TeamDetail"})
    }
    handleJoinTeam() {
        this.setState({selectedPage:"JoinTeam"})
    }
    redirectPage(pageName){
        this.setState({selectedPage:pageName})
    }

    render () {
        return (
            <div className="row">
                <div className="col-md-3 ">
                    <div className="optionListContainer">
                        <ul className="list-group">
                            <li className="list-group-item"><a href="#" onClick={this.handleCreateTeam}>Create a Team</a></li>
                            <li className="list-group-item"><a href="#" onClick={this.handleMyTeam}>My Team</a></li>
                            <li className="list-group-item"><a href="#" onClick={this.handleTeamDetail}>Team Detail</a></li>
                            <li className="list-group-item"><a href="#" onClick={this.handleJoinTeam}>Join a Team</a></li>
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