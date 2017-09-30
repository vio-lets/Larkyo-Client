import React from 'react';
import { ActivityFilter, ActivityItem} from '../index'
import {hereService} from '../../../../services'
import './ActivityPage.css';

export default class ActivityPage extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            popularPlacesItemSource:null,
            selectedDestination: null,
            selectedCategory: null
        };
        this.onActivityFilterChange = this.onActivityFilterChange.bind(this);
        this.loadgetPopularPlaces = this.loadgetPopularPlaces.bind(this);
        this.navigate = this.navigate.bind(this);
    }
    navigate(eventKey,param) {
        console.log(eventKey)
        this.props.handleRoute(eventKey,param)
        // this.props.history.push(eventKey);
    }
    onActivityFilterChange(result) {
        this.setState({
            selectedDestination: result.selectedDestination,
            selectedCategory: result.selectedCategory
        },this.loadgetPopularPlaces)
    }

    loadgetPopularPlaces() {
        let postData = {
            lat:this.state.selectedDestination.Latitude,
            lon:this.state.selectedDestination.Longitude,
            category:this.state.selectedCategory.Value
        }
        let that = this;
        hereService.postPopularPlacesQuery(postData)
            .then((res) => res.data)
            .then(function (data) {

                that.setState({
                    popularPlacesItemSource:data
                })
            })
            .catch((error)=> {
                console.log(error);
            });

    }

    render() {
        return (
            <div>
                <ActivityFilter onFilterChange={this.onActivityFilterChange}/>
                <h2>Coming Soon!</h2>
                {this.state.popularPlacesItemSource && this.state.popularPlacesItemSource.map((place,index)=> {
                    return <ActivityItem key={index} place={place} navigate={this.navigate}/>
                })}
            </div>
        )
    }
}