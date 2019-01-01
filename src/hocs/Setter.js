import React, { Component } from "react";

export default (name, initial, Cmp) => class extends Component {
    state = {
        [name]: initial
    }

    render () {
        const extendedProps = {
            [`set${name}`]: v => this.setState({ [name]: v })
        }
        return (
            <Cmp 
                {...this.state}
                {...this.props}
                {...extendedProps}
            />
        );
    }
}