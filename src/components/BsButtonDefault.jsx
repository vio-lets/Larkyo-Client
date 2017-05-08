import React from 'react'
import {Button} from 'react-bootstrap'

class BsButtonDefault extends Button {
    render() {
        return(
            <Button bsStyle={this.props.style}>{this.props.title}</Button>
        )
    }
}

export default BsButtonDefault
