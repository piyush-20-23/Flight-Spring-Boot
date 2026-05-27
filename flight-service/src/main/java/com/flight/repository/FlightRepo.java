package com.flight.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.flight.entity.FlightEntity;

@Repository
public interface FlightRepo extends JpaRepository<FlightEntity, Long>{
	
	// custom methods 
	@Query("SELECT fe FROM FlightEntity fe WHERE fe.source = :source AND fe.destination = :destination")
    List<FlightEntity> findByRoute(@Param("source") String source,
                                  @Param("destination") String destination);
	
	@Query("FROM FlightEntity WHERE cost BETWEEN :min AND :max")
	List<FlightEntity> findByPriceRange(@Param("min")double min, 
										@Param("max") double max);
}
