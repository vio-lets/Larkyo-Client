import React from 'react'
import {ButtonToolbar} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

class BsButtonToolbar extends ButtonToolbar {
    render() {
        const buttons = this.props.buttons.map((button, index) => {
            return <Button key={index} bsStyle="primary">{button}</Button>
        });

        return (
            <ButtonToolbar>{buttons}</ButtonToolbar>
        )
    }
}

export default BsButtonToolbar