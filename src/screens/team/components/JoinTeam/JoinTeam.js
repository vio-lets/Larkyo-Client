import React from 'react';
import {Link} from 'react-router-dom';
import './JoinTeam.css';
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

export default class JoinTeam extends React.Component {

    constructor(props){
        super(props);
        this.doSearch = this.doSearch.bind(this);
        this.handleClickJoin = this.handleClickJoin.bind(this);
        this.handleClickDetail = this.handleClickDetail.bind(this);
        this.handleCreateNewTeamClicked = this.handleCreateNewTeamClicked.bind(this);
        this.handleMyTeamClicked = this.handleMyTeamClicked.bind(this);
        this.handleSearchByIdClicked = this.handleSearchByIdClicked.bind(this);
        this.handleSearchByNameClicked = this.handleSearchByNameClicked.bind(this);
        this.state = {
            data:teamDataFromAPI,
            searchMethod:'Search Team'
        }
    }

    handleClickDetail(){
        this.props.handleRoute("TeamDetail");
    }
    doSearch(){
        alert("Search from API?");
    }
    handleClickJoin() {
        alert("Join the team request send to API");
    };
    handleCreateNewTeamClicked(){
        this.props.handleRoute("CreateTeam");
    }
    handleMyTeamClicked(){
        this.props.handleRoute("MyTeam");
    }
    handleSearchByIdClicked(){
        this.setState({searchMethod:"Search by ID"})
    }
    handleSearchByNameClicked(){
        this.setState({searchMethod:"Search by Name"})
    }
    
    render() {
        return (
            <div className="teamPage">
                <div className="searchNavbar">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Search By <span className="caret"/></a>
                                        <ul className="dropdown-menu">
                                            <li><a id="searchById" href="#" onClick={this.handleSearchByIdClicked}>Team ID</a></li>
                                            <li><a id="searchByName" href="#" onClick={this.handleSearchByNameClicked}>Team Name</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="navbar-form navbar-left">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder={this.state.searchMethod}/>
                                    </div>
                                    <button type="button" className="btn btn-default" onClick={this.doSearch}>Go!</button>
                                </form>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#" onClick={this.handleCreateNewTeamClicked}>Create New Team</a></li>
                                    <li><a href="#" onClick={this.handleMyTeamClicked}>My Team</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="teamsDisplay">
                    {this.state.data.teams.map(each => {
                        return(
                            <EachTeamItem id={each.id} name={each.name} description={each.description} clickDetailCallBack={this.handleClickDetail} clickJoinCallBack={this.handleClickJoin} key={each.id}/>
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