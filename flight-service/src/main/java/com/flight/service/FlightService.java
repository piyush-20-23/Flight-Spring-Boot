package com.flight.service;

import java.util.List;


import com.flight.entity.FlightEntity;

public interface FlightService {
	
	FlightEntity save(FlightEntity fe);
	
	FlightEntity findByCode(long code);
	
	List<FlightEntity> findByRoute(String source, String destination);
	
	List<FlightEntity> findByPriceRange(double min, double max);
	
	List<FlightEntity> listAll();
	
	boolean deleteByCode(long code);
}
