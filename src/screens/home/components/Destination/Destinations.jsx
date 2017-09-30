import React from 'react';
import { Col, Grid, Row, Thumbnail } from 'react-bootstrap';

class Destinations extends React.Component {
    render () {
        return (
            <div className="destination">
                <h3>Destinations</h3>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={3}>
                            <Thumbnail
                                src="http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-attractions-xlarge.jpg"
                                alt="242x200">
                                <span>Paris</span>
                            </Thumbnail></Col>
                        <Col xs={12} md={3}>
                            <Thumbnail
                                src="https://static1.squarespace.com/static/577cdf53c534a5bc31238461/t/5794c2229f7456b10f4941ab/1469366871684/"
                                alt="242x200">
                                <span>Auckland</span>
                            </Thumbnail></Col>
                        <Col xs={12} md={3}>
                            <Thumbnail
                                src="http://www.telegraph.co.uk/content/dam/Travel/leadAssets/31/82/London_Eye_view_3182851a-xlarge.jpg"
                                alt="242x200">
                                <span>London</span>
                            </Thumbnail></Col>
                        <Col xs={12} md={3}>
                            <Thumbnail
                                src="http://i.telegraph.co.uk/multimedia/archive/03156/new-york-USE_3156013k.jpg"
                                alt="242x200">
                                <span>New York</span>
                            </Thumbnail></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Destinations;