import React from 'react';
import './UserProfile.css';
import GoogleMap from 'google-map-react';

export default class UserProfile extends React.Component {
    constructor() {
        super();
        this.handleUserDetailClicked = this.handleUserDetailClicked.bind(this);
        this.state={
            center:{lat:-36.8485,lng:174.7633},
            zoom:11
        }
    }

    handleUserDetailClicked(){
        this.props.handleRoute("UserDetail");
    }

    render() {
        return (
            <div className="userProfileContainer">
                <div className="row headPanel">
                    <div className="col-md-12">
                        <a href="http://placeholder.com"><img src="http://via.placeholder.com/848x300"/></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h5 className="panel-title">Plans</h5>
                                    </div>
                                    <div className="panel-body">
                                        <ul className="list-group">
                                            <li className="list-group-item"><a href="">Tour to USA</a></li>
                                            <p>Auckland - LA - Las Vegas - NYC - Auckland</p>
                                            <p>Description</p>
                                            <div className="mapContainer" id="map">
                                                <GoogleMap
                                                    apiKey={"AIzaSyDyfeahq48UnOjINJCxP05FzsXQExdOoLo"}// set if you need stats etc ...
                                                    center={this.state.center}
                                                    zoom={this.state.zoom}>
                                                </GoogleMap>
                                            {/*<script>*/}
                                                {/*function initMap() {*/}
                                                {/*var uluru = {lat: -25.363, lng: 131.044};*/}
                                                {/*var map = new google.maps.Map(document.getElementById('map'), {*/}
                                                {/*zoom: 4,*/}
                                                {/*center: uluru*/}
                                            {/*});*/}
                                                {/*var marker = new google.maps.Marker({*/}
                                                {/*position: uluru,*/}
                                                {/*map: map*/}
                                            {/*});*/}
                                            {/*}*/}
                                            {/*</script>*/}
                                            {/*<script async defer*/}
                                                    {/*src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAPrjZ0gaLVnd3x6Sa7DX-EKDZpBFcgkc&callback=initMap">*/}
                                            {/*</script>*/}
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h5 className="panel-title">Reviews</h5>
                                    </div>
                                    <div className="panel-body">
                                        <ul className="list-group">
                                            <li className="list-group-item disabled"><a href="#">Day of Auckland</a></li>
                                            <p>
                                                Nice Trip
                                            </p>
                                            <li className="list-group-item disabled"><a href="#">5 days in Wonderland</a></li>
                                            So confused
                                            <li className="list-group-item disabled"><a href="#">A month in Hogwarts</a></li>
                                            Learned Magic
                                        </ul>
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