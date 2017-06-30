import React from 'react';
import CreateTeam from './components/CreateTeam/CreateTeam'
import JoinTeam from './components/JoinTeam/JoinTeam'
import MyTeam from './components/MyTeam/MyTeam'
import TeamDetail from './components/TeamDetail/TeamDetail'
import './styles.css';

export default class Team extends React.Component {
    constructor(...args){
        super(...args);
        this.handleCreateTeam = this.handleCreateTeam.bind(this);
        this.handleMyTeam = this.handleMyTeam.bind(this);
        this.handleTeamDetail = this.handleTeamDetail.bind(this);
        this.handleJoinTeam = this.handleJoinTeam.bind(this);
        this.state = {
            selectedPage:"JoinTeam"
        }
    }

    renderPage() {
        switch(this.state.selectedPage){
            case "JoinTeam":
                return(<JoinTeam/>);
                break;
            case "MyTeam":
                return(<MyTeam/>);
                break;
            case "CreateTeam":
                return(<CreateTeam/>);
                break;
            case "TeamDetail":
                return(<TeamDetail/>);
                break;
            default:
                return(<JoinTeam/>);
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