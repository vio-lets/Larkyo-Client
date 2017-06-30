import React from 'react';
import CreateTeam from './components/CreateTeam/CreateTeam'
import JoinTeam from './components/JoinTeam/JoinTeam'
import MyTeam from './components/MyTeam/MyTeam'
import TeamDetail from './components/TeamDetail/TeamDetail'

export default class Team extends React.Component {
    constructor(...args){
        super(...args);
    }
    render () {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="optionListContainer">
                        <ul className="list-group">
                            <li className="list-group-item">Create a Team</li>
                            <li className="list-group-item">My Team</li>
                            <li className="list-group-item">Team Detail</li>
                            <li className="list-group-item">Join a Team</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <TeamDetail/>
                </div>
            </div>
        );
    }
}