package com.flight.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "flight")
public class FlightEntity {
	
	@Id
	private long code;
	
	@Column(name="carrier")
	private String carrier;
	
	@Column(name="source")
	private String source;
	
	@Column(name="destination")
	private String destination;
	
	@Column(name="cost")
	private double cost;
	
	
	public FlightEntity() {
		// TODO Auto-generated constructor stub
	}


	public FlightEntity(long code, String carrier, String source, String destination, double cost) {
		super();
		this.code = code;
		this.carrier = carrier;
		this.source = source;
		this.destination = destination;
		this.cost = cost;
	}


	public long getCode() {
		return code;
	}


	public void setCode(long code) {
		this.code = code;
	}


	public String getCarrier() {
		return carrier;
	}


	public void setCarrier(String carrier) {
		this.carrier = carrier;
	}


	public String getSource() {
		return source;
	}


	public void setSource(String source) {
		this.source = source;
	}


	public String getDestination() {
		return destination;
	}


	public void setDestination(String destination) {
		this.destination = destination;
	}


	public double getCost() {
		return cost;
	}


	public void setCost(double cost) {
		this.cost = cost;
	}
	
	
}
