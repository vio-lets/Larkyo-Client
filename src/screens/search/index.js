import React from 'react';
import { PeopleSearch, TeamSearch, PlanSearch, DestinationSearch, ActivitySearch} from './components';
// import './index.css';

export default class Search extends React.Component {
    constructor(...args){
        super(...args);
        this.handlePeopleSearch = this.handlePeopleSearch.bind(this);
        this.handleTeamSearch = this.handleTeamSearch.bind(this);
        this.handleDestinationSearch = this.handleDestinationSearch.bind(this);
        this.handleActivitySearch = this.handleActivitySearch.bind(this);
        this.handlePlanSearch = this.handlePlanSearch.bind(this);

        this.state = {
            selectedPage:"PeopleSearch"
        }
    }

    renderPage() {
        switch(this.state.selectedPage){
            case "PeopleSearch":
                return(<PeopleSearch handleRoute={this.redirectPage}/>);
                break;
            case "TeamSearch":
                return(<TeamSearch handleRoute={this.redirectPage}/>);
                break;
            case "DestinationSearch":
                return(<DestinationSearch handleRoute={this.redirectPage}/>);
                break;
            case "ActivitySearch":
                return(<ActivitySearch handleRoute={this.redirectPage}/>);
                break;
            case "PlanSearch":
                return(<PlanSearch handleRoute={this.redirectPage}/>);
                break;
            default:
                return(<PeopleSearch handleRoute={this.redirectPage}/>);
        }
    };

    handlePeopleSearch() {
        this.setState({selectedPage:"PeopleSearch"})
    }
    handleTeamSearch() {
        this.setState({selectedPage:"TeamSearch"})
    }
    handleDestinationSearch() {
        this.setState({selectedPage:"DestinationSearch"})
    }
    handleActivitySearch() {
        this.setState({selectedPage:"ActivitySearch"})
    }
    handlePlanSearch() {
        this.setState({selectedPage:"PlanSearch"})
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
                            <li className="list-group-item"><a href="#" onClick={this.handlePeopleSearch}>People</a></li>
                            <li className="list-group-item"><a href="#" onClick={this.handleTeamSearch}>Teams</a></li>
                            <li className="list-group-item"><a href="#" onClick={this.handleDestinationSearch}>Destinations</a></li>
                            <li className="list-group-item"><a href="#" onClick={this.handleActivitySearch}>Activities</a></li>
                            <li className="list-group-item"><a href="#" onClick={this.handlePlanSearch}>Travel Plans</a></li>
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