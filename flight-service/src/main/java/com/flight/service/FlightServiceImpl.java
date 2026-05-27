package com.flight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flight.entity.FlightEntity;
import com.flight.repository.FlightRepo;

@Service
public class FlightServiceImpl implements FlightService{
	
	@Autowired
	FlightRepo repo;

	@Override
	public FlightEntity save(FlightEntity fe) {
		return repo.save(fe);
	}

	@Override
	public FlightEntity findByCode(long code) {
		return repo.findById(code).orElseThrow(
				() -> new InvalidFlightException("Flight with code : " + code + " not found."));
	}

	@Override
	public List<FlightEntity> findByRoute(String source, String destination) {
		return repo.findByRoute(source, destination);
	}

	@Override
	public List<FlightEntity> findByPriceRange(double min, double max) {
		return repo.findByPriceRange(min, max);
	}

	@Override
	public List<FlightEntity> listAll() {
		return repo.findAll();
	}

	@Override
	public boolean deleteByCode(long code) {
		repo.deleteById(code);
		return true;
	}
	
	

}
