import React from 'react';
import './UserProfile.css';

export default class UserProfile extends React.Component {
    constructor() {
        super();
        this.handleUserDetailClicked = this.handleUserDetailClicked.bind(this);
    }

    handleUserDetailClicked(){
        this.props.handleRoute("UserDetail");
    }

    render() {
        return (
            <div className="userProfileContainer">
                <div className="row">
                    <div className="col-md-12">
                        <img src = "https://www.w3schools.com/css/img_lights.jpg" alt="profilePics" style={{'width':'100%','height':'300'}}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="panel panel-default leftBar">
                                    <img src="https://html-online.com/img/witch.png" className="img-circle" alt="photo" width="170" height="170"/>
                                        <div className="panel-heading">
                                            <h5 className="panel-title">MM123 <br></br>
                                                Female<br></br>
                                                New Zealand<br></br>
                                                123@gmm.com</h5>
                                        </div>
                                        <div className="panel-body">
                                            <ul className="list-group">
                                                <li className="list-group-item"><a href="">credit: 300</a></li>
                                                <li className="list-group-item"><a href="#">Photographer: 12times</a></li>
                                                <li className="list-group-item"><a href="#">Cook: 3times</a></li>
                                                <li className="list-group-item"><a href="#">Driver: 1times</a></li>
                                                <li className="list-group-item"><a href="#" onClick={this.handleUserDetailClicked}>User Detail</a></li>
                                                <text>Plan involved: </text>
                                                <li className="list-group-item"><a href="#">Amazing trip of 3.03 room</a></li>
                                                <li className="list-group-item"><a href="#">Best tour of Panmure Library</a></li>
                                                <text>Wish List </text>
                                                <li className="list-group-item"><a href="#">3 days of Hamilton</a></li>
                                                <li className="list-group-item"><a href="#">North Island bike one month adventure </a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
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
                                                <div className="temp">
                                                    <h2>Google map suppose to be here!</h2>
                                                    <h2>However we should discuss about the key before we implement it.</h2>
                                                </div>
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