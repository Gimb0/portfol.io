package io.portfol.manager.controllers;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.dal.external.ShareDataHandler;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareHolding;
import io.portfol.manager.model.dto.PerformanceRequest;
import io.portfol.manager.model.dto.ShareHistoryRequest;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;

public class HistoryControllerTest {

	UserRepository userRepository = mock(UserRepository.class);
	JwtTokenService jwtTokenService = mock(JwtTokenService.class);

	private HistoryController historyController = new HistoryController(jwtTokenService, userRepository);
	
	@Test
	public void that_calculatePortfolioValue_returns_correct_value() {
		ShareHistoryRequest request = new ShareHistoryRequest();
		List<String> symbols = new ArrayList<>();
		symbols.add("IBM");
		request.setSymbols(symbols);
		request.setDate("1-6-2020");
		

		HistoryController historyController = new HistoryController(jwtTokenService, userRepository);
		Map<String, Double> result = historyController.getSharePricesOnDay(request);
		double value = result.get("IBM");
		assertEquals(124.89, value,1.00);
	}

	@Test 
	public void that_getUserHoldingsHistory_returns_correct_datatype() {
		User user = mock(User.class);
		Portfolio portfolio = mock(Portfolio.class);
		
		List<ShareHolding> shares = new ArrayList<>();
		LocalDateTime dateTime = LocalDateTime.of(2019, 12, 4, 0, 0);
		
		ShareHolding share1 = new ShareHolding(2324,1234,new Share("IBM",241.23,"IBM",null),10,dateTime);
		ShareHolding share2 = new ShareHolding(1000, 1050, new Share("Tesla", 800.00, "TSLA", null), 10, dateTime);
		
		share1.addToUnits(LocalDateTime.now(), 15);
		share2.addToUnits(LocalDateTime.now(), 11);
		
		shares.add(share1);
		shares.add(share2);
		
		portfolio.setShareHoldings(shares);
		user.setPortfolio(portfolio);
		Optional<User> optionalUser = Optional.of(user);

		when(jwtTokenService.getUsernameFromToken(anyString())).thenReturn("user1");
		when(userRepository.findByUsername(anyString())).thenReturn(optionalUser);
		when(user.getPortfolio()).thenReturn(portfolio);
		when(portfolio.getShareHoldings()).thenReturn(shares);
		when(portfolio.getShareHolding("IBM")).thenReturn(share1);
		when(portfolio.getShareHolding("TSLA")).thenReturn(share2);
		
		Map<Date, Double> response = historyController.getUserHoldingsHistory("randomrandom");

		assertTrue(response instanceof Map);
		for(Map.Entry<Date, Double> entry: response.entrySet()) {
			assertTrue(entry.getValue() > 0.0);
			assertTrue(entry.getKey() instanceof Date);
		}  
		
	}
	
	@Test
	public void that_getPortfolioHistory_returns_correct_datatype() {
		User user = mock(User.class);
		Portfolio portfolio = mock(Portfolio.class);
		
		List<ShareHolding> shares = new ArrayList<>();
		LocalDateTime dateTime = LocalDateTime.of(2019, 12, 4, 0, 0);
		
		ShareHolding share2 = new ShareHolding(1000, 1050, new Share("Tesla", 800.00, "TSLA", null), 10, dateTime);
		ShareHolding share1 = new ShareHolding(2324,1234,new Share("IBM",241.23,"IBM",null),10,dateTime);
		
		share1.addToUnits(LocalDateTime.now(), 10);
		
		shares.add(share1);
		shares.add(share2);
		
		portfolio.setShareHoldings(shares);
		user.setPortfolio(portfolio);
		Optional<User> optionalUser = Optional.of(user);
		
		when(jwtTokenService.getUsernameFromToken(anyString())).thenReturn("user1");
		when(userRepository.findByUsername(anyString())).thenReturn(optionalUser);
		when(user.getPortfolio()).thenReturn(portfolio);
		when(portfolio.getShareHoldings()).thenReturn(shares);
		
		List<HashMap<String, Object>> response = historyController.getPortfolioHistory("RANDOM_TOKEN");
		
		assertTrue(response instanceof List);
		assertTrue(response.size() > 0);
	}
	
	@Test
	public void that_getPortfolioValue_returns_correct_double() {
		List<String> symbols = new ArrayList<>();
		symbols.add("PORTFOLIO");
		
		
		ShareHistoryRequest request = new ShareHistoryRequest();
		request.setDate("1-1-2019");
		request.setSymbols(symbols);
		
		User user = mock(User.class);
		Portfolio portfolio = mock(Portfolio.class);
		
		List<ShareHolding> shares = new ArrayList<>();
		LocalDateTime dateTime = LocalDateTime.of(2019, 12, 4, 0, 0);
		
		ShareHolding share1 = new ShareHolding(2324,1234,new Share("IBM",241.23,"IBM",null),10,dateTime);
		ShareHolding share2 = new ShareHolding(1000, 1050, new Share("Tesla", 800.00, "TSLA", null), 10, dateTime);
		
		share1.addToUnits(LocalDateTime.now(), 10);
		
		shares.add(share1);
		shares.add(share2);
		
		portfolio.setShareHoldings(shares);
		user.setPortfolio(portfolio);
		Optional<User> optionalUser = Optional.of(user);
		
		when(jwtTokenService.getUsernameFromToken(anyString())).thenReturn("user1");
		when(userRepository.findByUsername(anyString())).thenReturn(optionalUser);
		when(user.getPortfolio()).thenReturn(portfolio);
		when(portfolio.getShareHoldings()).thenReturn(shares);
		when(portfolio.getShareHolding("IBM")).thenReturn(share1);
		when(portfolio.getShareHolding("TSLA")).thenReturn(share2);
		
		Double response = historyController.getPortfolioValue("RANDOM_TOKEN", request);
		
		System.out.println(response);
	}
	
	@Test
	public void that_getPortfolioValue_returns_correct_double2() {
		List<String> symbols = new ArrayList<>();
		symbols.add("PORTFOLIO");
		
		
		ShareHistoryRequest request = new ShareHistoryRequest();
		request.setDate("4-12-2019");
		request.setSymbols(symbols);
		
		User user = mock(User.class);
		Portfolio portfolio = mock(Portfolio.class);
		
		List<ShareHolding> shares = new ArrayList<>();
		LocalDateTime dateTime = LocalDateTime.of(2019, 12, 4, 0, 0);
		
		ShareHolding share1 = new ShareHolding(2324,1234,new Share("IBM",241.23,"IBM",null),10,dateTime);
		ShareHolding share2 = new ShareHolding(1000, 1050, new Share("Tesla", 800.00, "TSLA", null), 10, dateTime);
		
		share1.addToUnits(LocalDateTime.now(), 10);
		
		shares.add(share1);
		shares.add(share2);
		
		portfolio.setShareHoldings(shares);
		user.setPortfolio(portfolio);
		Optional<User> optionalUser = Optional.of(user);
		
		when(jwtTokenService.getUsernameFromToken(anyString())).thenReturn("user1");
		when(userRepository.findByUsername(anyString())).thenReturn(optionalUser);
		when(user.getPortfolio()).thenReturn(portfolio);
		when(portfolio.getShareHoldings()).thenReturn(shares);
		when(portfolio.getShareHolding("IBM")).thenReturn(share1);
		when(portfolio.getShareHolding("TSLA")).thenReturn(share2);
		
		Double response = historyController.getPortfolioValue("RANDOM_TOKEN", request);
		
		System.out.println(response);
	}
}
