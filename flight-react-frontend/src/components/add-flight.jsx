import React, { Component } from 'react';
import FlightRestService from '../services/flight-rest-service';

export default class AddFlight extends Component {

    constructor(props) {
        super(props);
        this.service = new FlightRestService();
        this.state = {
            code: 0,
            carrier: '',
            source: '',
            destination: '',
            cost: 0.0,
            message: ''
        };
    }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    onSave = () => {
        const flight = {
            code: this.state.code,
            carrier: this.state.carrier,
            source: this.state.source,
            destination: this.state.destination,
            cost: this.state.cost
        };
        this.service.saveFlight(flight).then(data => {
            if (data) {
                this.setState({ message: 'Flight saved successfully!' });
            }
        });
    }

    render() {
        return (
            <>
                <br />
                <h2>Add New Flight</h2>
                <hr />
                {this.state.message && (
                    <div className="alert alert-success">{this.state.message}</div>
                )}
                <form className='was-validated' onSubmit={(e) => { e.preventDefault(); this.onSave(); }}>
                    <input name="code" onChange={this.handleInput} placeholder="Enter Flight Code"
                        className="form-control" required pattern="[1-9][0-9]*" />
                    <br />
                    <input name="carrier" onChange={this.handleInput} placeholder="Enter Carrier Name"
                        className="form-control" required pattern="[A-Za-z][A-Za-z\s]{1,}" />
                    <br />
                    <input name="source" onChange={this.handleInput} placeholder="Enter Source City"
                        className="form-control" required pattern="[A-Za-z][A-Za-z\s]{1,}" />
                    <br />
                    <input name="destination" onChange={this.handleInput} placeholder="Enter Destination City"
                        className="form-control" required pattern="[A-Za-z][A-Za-z\s]{1,}" />
                    <br />
                    <input name="cost" onChange={this.handleInput} placeholder="Enter Cost (₹)"
                        className="form-control" required pattern="[1-9][0-9]*(\.[0-9]+)?" />
                    <br />
                    <button className="btn btn-primary" type='submit'>Save Flight</button>
                </form>
            </>
        );
    }
}
