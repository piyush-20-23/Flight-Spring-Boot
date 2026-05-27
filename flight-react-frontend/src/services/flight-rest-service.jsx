export default class FlightRestService {

    constructor() {
        this.url = "http://localhost:8080/api/flight";
    }

    saveFlight(flight) {
        return fetch(this.url + "/save", {
            method: "POST",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(flight)
        }).then(response => {
            if (!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
        }).catch(error => {
            console.log(error.message);
        });
    }

    getFlightByCode(code) {
        return fetch(this.url + "/code/" + code)
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            }).catch(error => {
                console.log(error.message);
            });
    }

    async getFlightsByRoute(source, destination) {
        return await fetch(this.url + "/route/" + source + "/" + destination)
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            }).catch(error => {
                console.log(error.message);
            });
    }

    async getFlightsByPriceRange(min, max) {
        return await fetch(this.url + "/price/" + min + "/" + max)
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            }).catch(error => {
                console.log(error.message);
            });
    }

    async getAllFlights() {
        return await fetch(this.url + "/all")
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            }).catch(error => {
                console.log(error.message);
            });
    }

    deleteFlight(code) {
        return fetch(this.url + "/delete/" + code, {
            method: "DELETE",
            mode: "cors"
        }).then(response => {
            if (!response.ok) {
                this.handleResponseError(response);
            }
            return response.text();
        }).catch(error => {
            console.log(error.message);
        });
    }

    handleResponseError(response) {
        if (response.status === 404) {
            throw new Error("Resource not found");
        } else if (response.status === 500) {
            throw new Error("Internal server error");
        } else {
            throw new Error("Unexpected error: " + response.statusText);
        }
    }
}
