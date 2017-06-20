import React from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';

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

export default class TeamPage extends React.Component {

    constructor(props){
        super(props);
        TeamPage.doSearch = TeamPage.doSearch.bind(this);
        TeamPage.joinTeam = TeamPage.joinTeam.bind(this);
        TeamPage.goToDetail = TeamPage.goToDetail.bind(this);
        this.state = {
            data:teamDataFromAPI,
            searchMethod:'Search Team'
        }
    }

    static goToDetail(){
        alert("go to detail page");
    }

    static doSearch(){
        alert("Search from API?");
    }
    static joinTeam() {
        alert("Join the team request send to API");
    };

    render() {
        return (
            <div className="teamPage">
                <h2>Teams</h2>

                <div className="searchNavbar">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Search By <span className="caret"/></a>
                                        <ul className="dropdown-menu">
                                            <li><a id="searchById" href="#">Team ID</a></li>
                                            <li><a id="searchByName" href="#">Team Name</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="navbar-form navbar-left">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder={this.state.searchMethod}/>
                                    </div>
                                    <button type="submit" className="btn btn-default" onClick={TeamPage.doSearch}>Go!</button>
                                </form>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/teamCreate">Create New Team</Link></li>
                                    <li><Link to="/myTeam">My Team</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="teamsDisplay">
                    {this.state.data.teams.map(each => {
                        return(
                            <div className="eachTeam">
                                <p className="teamID"> #{each.id} </p>
                                <p className="teamName">{each.name}</p>
                                <ul className="nav navbar-nav links">
                                    <li><a href="#" onClick={TeamPage.goToDetail}>Details</a></li>
                                    <li><a href="#" onClick={TeamPage.joinTeam}>Join</a></li>
                                </ul>
                                <h5 className="teamDescription">{each.description}</h5>
                            </div>
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