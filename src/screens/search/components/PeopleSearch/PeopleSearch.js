import React from 'react';
import './PeopleSearch.css';

export default class PeopleSearch extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <div className="peopleSearchContainer">
                <div className="col-md-9">
                    <div className="row">
                        <div className="filter-panel">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    People Search
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-md-5 control-label">From:</label>
                                                    <div className="col-md-7">
                                                        <input id="availableFrom" className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-md-5 control-label">To:</label>
                                                    <div className="col-md-7">
                                                        <input id="availableTo" className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-md-5 control-label">Origin:</label>
                                                    <div className="col-md-7">
                                                        <input id="origin" className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-md-5 control-label">Destination:</label>
                                                    <div className="col-md-7">
                                                        <input id="destination" className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-md-5 control-label">Name:</label>
                                                    <div className="col-md-7">
                                                        <input id="name" className="form-control" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-horizontal">
                                                <div className="form-group">
                                                    <label className="col-md-5 control-label">Gender:</label>
                                                    <div className="col-md-7">
                                                        <div className="checkbox">
                                                            <label><input type="checkbox" checked/>Male</label>
                                                            <label><input type="checkbox" checked/>Female</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pull-right">
                                        <button className="btn btn-primary">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="search-result">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="media">
                                            <div className="media-left media-top">
                                                <a href="#">
                                                    <img className="media-object" src="..." alt="..." width="150" height="150"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h2>Johnny Lemons</h2>
                                                <p>
                                                    I am a travel extraordinaire. Enjoys extreme sports  from surfing to mountain climbing. I have a great sense of humor and isn't afraid to meet new people and try new things. Hit me up!
                                                </p>
                                                <div className="form-inline">
                                                    <div className="form-group">
                                                        <label className="text-right">Gender:</label>
                                                        <p className="form-control-static">Male</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-right">Age:</label>
                                                        <p className="form-control-static">20's</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-right">Location:</label>
                                                        <p className="form-control-static">Auckland</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-right">Roles:</label>
                                                        <p className="form-control-static">Photographer, Tour Guide</p>
                                                    </div>
                                                </div>
                                                <div className="pull-right">
                                                    <button className="btn btn-primary">
                                                        Team Invite
                                                    </button>
                                                    <button className="btn btn-primary">
                                                        Friend Invite
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="media">
                                            <div className="media-left media-top">
                                                <a href="#">
                                                    <img className="media-object" src="..." alt="..." width="150" height="150"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h2>Jenny Matrix</h2>
                                                <p>
                                                    &lt;No description&gt;
                                                </p>
                                                <div className="form-inline">
                                                    <div className="form-group">
                                                        <label className="text-right">Gender:</label>
                                                        <p className="form-control-static">Female</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-right">Age:</label>
                                                        <p className="form-control-static">classNameified</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-right">Location:</label>
                                                        <p className="form-control-static">Hamilton</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-right">Roles:</label>
                                                        <p className="form-control-static">Accountant</p>
                                                    </div>
                                                </div>
                                                <div className="pull-right">
                                                    <button className="btn btn-primary">
                                                        Team Invite
                                                    </button>
                                                    <button className="btn btn-primary">
                                                        Friend Invite
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}