import React from 'react';
import './PlanPage.css';

export default class ActivityPage extends React.Component {
    constructor() {
        super();
        this.state = {
            planList: [
                {
                    id: "1",
                    duration: 3,
                    name: "Hawke's Bay to Wellington Wine Trail",
                    destinations: ["Napier", "Wellington"]
                },
                {
                    id: "2",
                    duration: 1,
                    name: "Auckland and Waiheke Island - no driving required",
                    destinations: ["Auckland", "Waiheke Island"]
                },
                {
                    id: "3",
                    duration: 4,
                    name: "Christchurch, South Canterbury and Mackenzie",
                    destinations: ["Christchurch", "Aoraki Mt Cook", "Lake Tekapo"]
                },
                {
                    id: "4",
                    duration: 3,
                    name: "Christchurch to Dunedin via Oamaru",
                    destinations: ["Christchurch", "Oamaru", "Dunedin"]
                },
                {
                    id: "5",
                    duration: 5,
                    name: "Wellington to Queenstown via Aoraki Mt Cook",
                    destinations: ["Wellington", "Aoraki Mt Cook", "Queenstown"]
                },
                {
                    id: "6",
                    duration: 5,
                    name: "Nature and Nightlife in Lower South Island",
                    destinations: ["Dunedin "]
                },
                {
                    id: "7",
                    duration: 7,
                    name: "Central North Island Wilderness and Wineries",
                    destinations: ["Rotorua", "Lake Waikaremoana"]
                },
                {
                    id: "8",
                    duration: 4,
                    name: "Wellington to Queenstown via West Coast",
                    destinations: ["Wellington", "West Coast", "Queenstown"]
                },
                {
                    id: "9",
                    duration: 5,
                    name: "Auckland to Wellington via Rotorua",
                    destinations: ["Auckland", "Rotorua", "Wellington"]
                },
            ]
        }
    }

    render() {
        return <div>
            <div className="col-xs-12 text-center">
                <div>
                    <h3>Find Plan</h3>
                </div>
                <div className="form-group">
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="Search Plan"/>
                        <span className="input-group-btn">
                        <button className="btn btn-default" type="button">Go!</button>
                    </span>
                    </div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-3">
                <div className="form-group">
                    <label htmlFor="inputdefault">Duration</label>
                    <input className="form-control" id="inputdefault" type="number" min="1" max="7" value="7"/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-9 no-padding">
                {this.state.planList.map(function (row) {
                    return <div key={row.id} className="col-xs-12 no-padding teamItem">
                        <div className="pull-right col-sm-6 col-md-5 no-padding hidden-xs">
                            <img src="http://via.placeholder.com/324x200" className="pull-right img-responsive"/>
                        </div>
                        <div className="pull-left col-sm-6 col-md-7">
                            <a href="#">
                                <h5 className="hidden-xs hidden-sm">{row.name}</h5>
                                <h6 className="hidden-md hidden-lg">{row.name}</h6>
                            </a>
                            <div className="col-xs-12 no-padding">
                                <div className="no-padding text-center plan-summary durationBlock">
                                    <span className="duration">{row.duration}</span>
                                    <span className="duration">Days</span>
                                </div>
                                <div className="no-padding plan-summary destinationBlock">
                                    {row.destinations.map(function (dest) {
                                        return <div key={dest} className="dest"><a href="#"><span
                                            className="">{dest}</span></a></div>
                                    })}
                                </div>
                            </div>
                            <span className="col-xs-12 no-padding introduction">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, error est eveniet excepturi, illum inventore iure iusto officia quibusdam repudiandae saepe sunt tempore velit? Blanditiis distinctio enim est natus sit.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum eius ex excepturi nihil nobis quae quos ratione sed sint? Dignissimos dolorum laborum maxime neque nostrum porro provident quia ullam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt distinctio eius et eum exercitationem explicabo hic id numquam repudiandae! Accusantium consequatur dolore dolorum earum illum, odit perferendis ratione veniam!
                            </span>
                            <div className="col-xs-12 no-padding teamBtnGroup">
                                <a className="btn btn-xs btn-warning">Clone Plan</a>
                                <a className="btn btn-xs btn-info">Create Team</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
            ;
    }
}