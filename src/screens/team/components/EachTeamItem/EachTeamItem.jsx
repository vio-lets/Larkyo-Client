import React from 'react';
import './EachTeamItem.css';

export default class EachTeamItem extends React.Component {
    render () {
        return (
            <div className="eachTeam" key={this.props.id}>
                <p className="teamID"> #{this.props.id} </p>
                <p className="teamName">{this.props.name}</p>
                <ul className="nav navbar-nav links">
                    <li><a href="#" onClick={this.props.clickDetailCallBack}>Details</a></li>
                    {
                        this.props.clickJoinCallBack === undefined ? null : <li><a href="#" onClick={this.props.clickJoinCallBack}>Join</a></li>
                    }
                </ul>
                <h5 className="teamDescription">{this.props.description}</h5>
            </div>
        );
    }
}