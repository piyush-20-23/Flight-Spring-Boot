package com.flight.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flight.entity.FlightEntity;
import com.flight.service.FlightService;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/flight")
// http://localhost:8080/api/flight
public class FlightController {
	
	
	@Autowired
	private FlightService service;
	
	/*
	 * 
	
	boolean deleteByCode(long code);
	 * 
	 * */
	
	@PostMapping("/save")
	// http://localhost:8080/api/flight/save
	public ResponseEntity<FlightEntity> save(@RequestBody FlightEntity fe){
		FlightEntity resp = service.save(fe);
		return new ResponseEntity<>(resp, HttpStatus.CREATED);
	}
	
	@GetMapping("/code/{code}")
	// http://localhost:8080/api/flight/code/code
    public ResponseEntity<FlightEntity> findByIsbn(@PathVariable long code) {
        FlightEntity flight = service.findByCode(code);
        return new ResponseEntity<>(flight, HttpStatus.OK);
    }
	
	@GetMapping("/route/{source}/{destination}")
	// http://localhost:8080/api/flight/route/source/destination
	public ResponseEntity<List<FlightEntity>> findByRoute (@PathVariable String source, @PathVariable String destination){
		List<FlightEntity> list = service.findByRoute(source, destination);
		return new ResponseEntity<List<FlightEntity>>(list, HttpStatus.OK);
	}
	
	@GetMapping("/price/{min}/{max}")
	// http://localhost:8080/api/flight/price/min/max
	public ResponseEntity<List<FlightEntity>> findByPrice(@PathVariable double min, @PathVariable double max){
		List<FlightEntity> list = service.findByPriceRange(min, max);
		return new ResponseEntity<List<FlightEntity>>(list, HttpStatus.OK);
	}
	
	
	@DeleteMapping("delete/{code}")
	// http://localhost:8080/api/flight/delete/code
	public ResponseEntity<String> deleteByCode(@PathVariable long code){
		if(service.deleteByCode(code))
			return new ResponseEntity<>("Flight deleted", HttpStatus.OK);
		else 
			return new ResponseEntity<>("Flight not found", HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/all")
	// http://localhost:8080/api/flight/all
	public ResponseEntity<List<FlightEntity>> findAll(){
		
		List<FlightEntity> resp = service.listAll();
		return new ResponseEntity<>(resp, HttpStatus.OK);
	}
		
}
