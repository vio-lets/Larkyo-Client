import React from 'react';
import './PlanDetail.css';

export default class PlanDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            planTemplate: [
                {
                    id: "1", day: "1", plan: [{destination: "Auckland", activity: ["Auckland Zoo"]}]
                },
                {
                    id: "2", day: "2", plan: [
                    {destination: "Auckland", activity: ["Mission Bay", "Auckland Skycity"]},
                    {destination: "Hamilton", activity: ["Hamilton Garden", "Hamilton Skycity"]},
                    {destination: "Rotorua", activity: ["Skyline", "Spa"]}
                ]
                },
                {
                    id: "3", day: "3", plan: [{destination: "Rotorua", activity: ["Free day"]}]
                },
                {
                    id: "4", day: "4", plan: [{destination: "Auckland", activity: ["Auckland Airport"]}]
                }
            ]

        }
    }

    render() {
        return <div>
            <div className="col-xs-12 text-center no-padding">
                <h3>Plan Detail</h3>
            </div>
            <div className="col-xs-3 no-padding">
                <ul className="planTemplate list-group">
                    {this.state.planTemplate.map(function (day) {
                        return <li key={day.id} className="list-group-item">
                            <a href={'#' + day.id}>Day {day.day}</a>
                            <div>
                                <ul className="planDestination">
                                    {day.plan.map(function (plan) {
                                        return <li key={plan.destination}>{plan.destination}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    })}
                </ul>

            </div>
            <div className="col-xs-9 no-padding">
                {this.state.planTemplate.map(function (day) {
                    return <div className="panel panel-default" key={day.id} id={day.id}>
                        <div className="panel-heading">
                            <h3 className="panel-title">Day {day.day}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-xs-12 no-padding">
                                    {day.plan.map(function (plan) {
                                        return <ul className="list-inline" key={plan.destination}>
                                            {plan.activity.map(function (act) {
                                                return <li key={act}>{act}</li>
                                            })}
                                        </ul>
                                    })}

                                </div>
                                <article>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo laborum repellendus tenetur voluptate. Aliquid beatae eum in itaque magnam maxime molestias nihil obcaecati, officia sed, tempora, ullam vitae voluptatem.</p>
                                </article>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}