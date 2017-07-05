import React from 'react';
import {Link} from 'react-router-dom';
import './MyTeam.css';
import EachTeamItem from '../EachTeamItem/EachTeamItem.jsx'

let teamDataFromAPI = {"teams":[
    {"id":1, "name":"Jesse's Team", "description":"This is Jesse's team. Welcome everyone"},
    {"id":2, "name":"Clyde's Team", "description":"This is Clyde's team. Welcome everyone"},
    {"id":3, "name":"Diadawnfly's Team", "description":"This is Diadawnfly's team. Welcome everyone"},
    {"id":4, "name":"Frank's Team", "description":"This is Frank's team. Welcome everyone"},
    {"id":5, "name":"Kevin's Team", "description":"This is Kevin's team. Welcome everyone"},
    {"id":6, "name":"Lawrence's Team", "description":"This is Lawrence's team. Welcome everyone"},
    {"id":7, "name":"Leon's Team", "description":"This is Leon's team. Welcome everyone"},
    {"id":8, "name":"Mike's Team", "description":"This is Mike's team. Welcome everyone"},
    {"id":9, "name":"Randy's Team", "description":"This is Randy's team. Welcome everyone"}
]};

export default class MyTeam extends React.Component {
    constructor(props){
        super(props);
        this.handleClickDetail = this.handleClickDetail.bind(this);
        this.state = {
            data:teamDataFromAPI
        }
    }

    handleClickDetail(){
        this.props.handleRoute("TeamDetail");
    }

    render() {
        return (
            <div className="myTeamPage">
                <h4> You are currently in the following teams:</h4>
                <div className="teamsDisplay">
                    {this.state.data.teams.map(each => {
                        return(
                            <EachTeamItem id={each.id} name={each.name} description={each.description} clickDetailCallBack={this.handleClickDetail} key={each.id}/>
                        )
                    })}
                </div>
                <ul className="nav navbar-nav links">
                    <li><Link to="/">Back to Home</Link></li>
                </ul>
            </div>
        );
    }
}