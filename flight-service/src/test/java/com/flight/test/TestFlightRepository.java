package com.flight.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;

import com.flight.entity.FlightEntity;
import com.flight.repository.FlightRepo;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class TestFlightRepository {
	
	
	@Autowired
	private FlightRepo repo;
	
	
	@Test
	@Order(1)
	@DisplayName("Test 1 : Find Flight Test")
	public void testFindByCode() {
		
		Optional<FlightEntity> entity = repo.findById((long) 10001);
		assertTrue(entity.isPresent());
		assertEquals(entity.get().getCarrier(),"IndiGo" );
	}
	
	
	@Test
    @Order(2)
    @DisplayName("Test 2 : Save Flight Test")
    public void testSaveFlight() {
        FlightEntity fe = new FlightEntity();
        fe.setCode(20001);
        fe.setCarrier("Air India");
        fe.setSource("Mumbai");
        fe.setDestination("Pune");
        fe.setCost(3500.0);

        FlightEntity saved = repo.save(fe);

        assertEquals(20001, saved.getCode());
        assertEquals("Air India", saved.getCarrier());
    }
	
	@Test
    @Order(3)
    @DisplayName("Test 3 : Find By Route Test")
    public void testFindByRoute() {
        List<FlightEntity> list = repo.findByRoute("Delhi", "Goa");

        assertTrue(list.size() > 0);
        assertEquals("Delhi", list.get(0).getSource());
    }

    @Test
    @Order(4)
    @DisplayName("Test 4 : Find By Price Range Test")
    public void testFindByPriceRange() {
        List<FlightEntity> list = repo.findByPriceRange(3000, 8000);

        assertTrue(list.size() > 0);
        assertTrue(list.get(0).getCost() >= 3000);
    }

    @Test
    @Order(5)
    @DisplayName("Test 5 : Delete Flight Test")
    public void testDeleteFlight() {
        repo.deleteById((long) 10001);

        Optional<FlightEntity> entity = repo.findById((long) 10001);
        assertTrue(entity.isEmpty());
    }
	
}
