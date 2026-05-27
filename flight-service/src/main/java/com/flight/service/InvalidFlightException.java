package com.flight.service;

public class InvalidFlightException extends RuntimeException{
	
	public InvalidFlightException() {
	}

	public InvalidFlightException(String message) {
		super(message);
	}
	
	
}
