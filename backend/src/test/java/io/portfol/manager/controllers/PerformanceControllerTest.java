package io.portfol.manager.controllers;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Optional;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareHolding;
import io.portfol.manager.model.dto.PerformanceRequest;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;

public class PerformanceControllerTest {

	UserRepository userRepository = mock(UserRepository.class);
	JwtTokenService jwtTokenService = mock(JwtTokenService.class);
	
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
		
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void that_getPerformanceData_returns_data_with_high_greater_than_low() {
		PerformanceRequest request = new PerformanceRequest();
		request.setSymbols("TSLA,IBM");
		request.setFrom("1-5-2020");
		request.setTo("1-7-2020");
		request.setInterval(2);
		
		PerformanceController performanceController = new PerformanceController(userRepository, jwtTokenService);
		
		List<LinkedHashMap<String, String>> result = performanceController.getPerformanceData("RANDOM", request);
		
		result.forEach(dateMap -> {
			Double high = Double.parseDouble(dateMap.get("High"));
			Double low = Double.parseDouble(dateMap.get("Low"));
			assertTrue(high > low);
		});
	}
	
	@Test
	public void that_getPerformanceData_can_retrieve_portfolio_data() {
		PerformanceRequest request = new PerformanceRequest();
		request.setSymbols("PORTFOLIO,IBM,TSLA");
		request.setFrom("1-5-2020");
		request.setTo("1-7-2020");
		request.setInterval(2);
		
		User user = mock(User.class);
		Portfolio portfolio = new Portfolio();
		List<ShareHolding> shares = new ArrayList<>();
		shares.add(new ShareHolding(1000, 1050, new Share("Tesla", 800.00, "TSLA", null), 10, LocalDateTime.now()));
		portfolio.setShareHoldings(shares);
		user.setPortfolio(portfolio);
		
		Optional<User> optionalUser = Optional.of(user);
		
		when(jwtTokenService.getUsernameFromToken(anyString())).thenReturn("user1");
		when(userRepository.findByUsername(anyString())).thenReturn(optionalUser);
		when(user.getPortfolio()).thenReturn(portfolio);
		
		PerformanceController performanceController = new PerformanceController(userRepository, jwtTokenService);
		
		List<LinkedHashMap<String, String>> result = performanceController.getPerformanceData("RANDOM_TOKEN", request);
		
		result.forEach(dateMap -> {
			Double high = Double.parseDouble(dateMap.get("High"));
			Double low = Double.parseDouble(dateMap.get("Low"));
			assertTrue(high > low);
		});
	}

}
