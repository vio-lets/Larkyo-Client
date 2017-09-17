import React from 'react';
import {ActivityFilter, ActivityItem} from '../index'
import {hereService} from '../../../../services'
import './ActivityDetailPage.css';

export default class ActivityDetailPage extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            place: this.props.place,
            placeDetail:null
        };
        this.loadPlaceDetail = this.loadPlaceDetail.bind(this)
        this.init = this.init.bind(this);
    }

    componentWillMount() {
        this.init();
    }

    init() {

        this.loadPlaceDetail();
    }

    loadPlaceDetail() {
        let postData = this.state.place
        let that = this;
        hereService.postPopularPlaceDetails(postData)
            .then((res) => res.data)
            .then((data)=> {

                this.setState({
                    placeDetail:data
                })
            }).catch((error)=> {
            console.log(error);
        });

    }


    render() {
        return (
            <div>
                {this.state.placeDetail&&<h3>{this.state.placeDetail.Name}</h3>}

                {this.state.placeDetail&&
                this.state.placeDetail.Contacts.map((item,index)=>{
                    return <div key={index}>
                        <label>{item.Label}</label>
                        <p>{item.Value}</p>
                      </div>
                })}
                {this.state.placeDetail&&
                <div>
                    <p>Address:</p>
                    <div>{this.state.placeDetail.FullTextAddress}</div>
                </div>}


            </div>
        )
    }
}