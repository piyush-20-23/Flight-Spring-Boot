import { Component } from 'react';
import FlightRestService from '../services/flight-rest-service';

export default class FindPrice extends Component {

    constructor(props) {
        super(props);
        this.service = new FlightRestService();
        this.state = {
            min: 0,
            max: 0,
            flights: []
        };
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSearch = () => {
        this.service.getFlightsByPriceRange(this.state.min, this.state.max).then(data => {
            this.setState({ flights: data || [] });
        });
    }

    render() {
        return (
            <div>
                <br />
                <h2>Find Flights by Price Range</h2>
                <hr />
                <div className="row">
                    <div className="col">
                        <input name='min' onChange={this.handleInput} className="form-control"
                            placeholder="Enter Min Cost (₹)" type="number" />
                    </div>
                    <div className="col">
                        <input name='max' onChange={this.handleInput} className="form-control"
                            placeholder="Enter Max Cost (₹)" type="number" />
                    </div>
                </div>
                <button className="btn btn-primary mt-2" onClick={this.onSearch}>Search by Price</button>
                <br /><br />
                {this.state.flights && this.state.flights.length > 0 ? (
                    <table className="table table-bordered mt-3">
                        <thead className="table-dark">
                            <tr>
                                <th>Code</th>
                                <th>Carrier</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.flights.map((flight, index) => (
                                <tr key={index}>
                                    <td>{flight.code}</td>
                                    <td>{flight.carrier}</td>
                                    <td>{flight.source}</td>
                                    <td>{flight.destination}</td>
                                    <td>₹{flight.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="mt-3">No flights found for this price range.</div>
                )}
            </div>
        );
    }
}
