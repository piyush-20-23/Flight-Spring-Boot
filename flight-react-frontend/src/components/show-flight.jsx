import React, { Component } from 'react';

export default class ShowFlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flight: props.flight
        };
    }

    onDelete() {
        if (window.confirm("Are you sure you want to delete flight: " + this.state.flight.code + "?"))
            this.props.onDelete(this.state.flight.code);
    }

    render() {
        return (
            <>
                <td>{this.state.flight.code}</td>
                <td>{this.state.flight.carrier}</td>
                <td>{this.state.flight.source}</td>
                <td>{this.state.flight.destination}</td>
                <td>₹{this.state.flight.cost}</td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={() => this.onDelete()}>Delete</button>
                </td>
            </>
        );
    }
}
