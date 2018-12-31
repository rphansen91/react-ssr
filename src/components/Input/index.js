import React, { Component, cloneElement } from 'react';

export default class Input extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    setValue (value) {
        this.setState({ value });
    }
    transformValue (ev) {
        return ev.target.value
    }
    onChange (ev) {
        const value = this.transformValue(ev);
        this.setValue(value);
    }
    renderInput () {
        return (
            <input 
                value={this.state.value} 
                onChange={(ev) => this.onChange(ev)} 
            />
        );
    }
    render() {
        return (
            <div>
                {this.renderInput()}
                {this.props.children(this.state.value)}
            </div>
        );
    }
}

export class NumberInput extends Input {
    transformValue (ev) {
        return Number(super.transformValue(ev))
    }
    renderInput () {
        const input = super.renderInput();
        return (
            <div className="form-group">
                {cloneElement(input, { 
                    className: "form-control",
                    type: "number" 
                })}
            </div>
        );
    }
}