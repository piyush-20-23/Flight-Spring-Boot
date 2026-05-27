import { Component } from 'react';
import FlightRestService from '../services/flight-rest-service';

export default class FindCode extends Component {

    constructor(props) {
        super(props);
        this.service = new FlightRestService();
        this.state = {
            code: '',
            flight: null,
            error: ''
        };
    }

    handleInput = (event) => {
        this.setState({ code: event.target.value, flight: null, error: '' });
    }

    onSearch = () => {
        this.service.getFlightByCode(this.state.code).then(data => {
            if (data) {
                this.setState({ flight: data, error: '' });
            } else {
                this.setState({ flight: null, error: 'Flight not found.' });
            }
        }).catch(() => {
            this.setState({ flight: null, error: 'Flight not found.' });
        });
    }

    render() {
        return (
            <div>
                <br />
                <h2>Find Flight by Code</h2>
                <hr />
                <input name='code' onChange={this.handleInput} className="form-control"
                    placeholder="Enter flight code" type="number" />
                <button className="btn btn-primary mt-2" onClick={this.onSearch}>Search by Code</button>
                <br /><br />
                {this.state.error && (
                    <div className="alert alert-warning">{this.state.error}</div>
                )}
                {this.state.flight && (
                    <table className="table table-bordered mt-3">
                        <tbody>
                            <tr><td><strong>Code</strong></td><td>{this.state.flight.code}</td></tr>
                            <tr><td><strong>Carrier</strong></td><td>{this.state.flight.carrier}</td></tr>
                            <tr><td><strong>Source</strong></td><td>{this.state.flight.source}</td></tr>
                            <tr><td><strong>Destination</strong></td><td>{this.state.flight.destination}</td></tr>
                            <tr><td><strong>Cost</strong></td><td>₹{this.state.flight.cost}</td></tr>
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}
