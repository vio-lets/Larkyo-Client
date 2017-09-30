import React from 'react';
import { MyPlan, CreatePlan, PlanDetail, PlanPage } from './components';
import './index.css';

export default class Plan extends React.Component {
    constructor(...args){
        super(...args);
        this.handleCreatePlan = this.handleCreatePlan.bind(this);
        this.handleMyPlan = this.handleMyPlan.bind(this);
        this.handlePlanDetail = this.handlePlanDetail.bind(this);
        this.handlePlanPage = this.handlePlanPage.bind(this);
        this.redirectPage = this.redirectPage.bind(this);
        this.state = {
            selectedPage:"PlanPage"
        }
    }

    renderPage() {
        switch(this.state.selectedPage){
            case "MyPlan":
                return(<MyPlan handleRoute={this.redirectPage}/>);
                break;
            case "CreatePlan":
                return(<CreatePlan handleRoute={this.redirectPage}/>);
                break;
            case "PlanDetail":
                return(<PlanDetail handleRoute={this.redirectPage}/>);
                break;
            default:
                return(<PlanPage handleRoute={this.redirectPage}/>);
        }
    };

    handleCreatePlan() {
        this.setState({selectedPage:"CreatePlan"})
    }
    handleMyPlan() {
        this.setState({selectedPage:"MyPlan"})
    }
    handlePlanDetail() {
        this.setState({selectedPage:"PlanDetail"})
    }
    handlePlanPage() {
        this.setState({selectedPage:"PlanPage"})
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
                            <li className="list-group-item"><a href="#" onClick={this.handleCreatePlan}>Create a Plan</a></li>
                            <li className="list-group-item"><a href="#" onClick={this.handleMyPlan}>My Plan</a></li>
                            <li className="list-group-item"><a href="#" onClick={this.handlePlanDetail}>Plan Detail</a></li>
                            <li className="list-group-item"><a href="#" onClick={this.handlePlanPage}>Plan Page</a></li>
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