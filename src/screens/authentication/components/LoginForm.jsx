import React from 'react';
import { Button, Col, FormControl, FormGroup, Glyphicon, Grid, InputGroup, Row, Thumbnail } from 'react-bootstrap';

class LoginForm extends React.Component {
    render () {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={4} mdOffset={4}>
                        <Thumbnail
                            // style={{backgroundcolor: lightgray}}
                            src="http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-attractions-xlarge.jpg"
                            alt="242x200">
                            <form>
                                <FormGroup>
                                    {/*<ControlLabel>Username</ControlLabel>*/}
                                    <InputGroup>
                                        <FormControl type="text" placeholder="Enter Username"/>
                                        <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    {/*<ControlLabel>Password</ControlLabel>*/}
                                    <InputGroup>
                                        <FormControl type="text" placeholder="Enter Password"/>
                                        <InputGroup.Addon><Glyphicon glyph="lock"/></InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                                <Button type="submit" bsStyle="primary" block>Login</Button>
                            </form>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default LoginForm;