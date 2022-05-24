package io.portfol.manager.controllers;

import org.junit.Before;
import org.junit.Test;

import static org.mockito.Mockito.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;

import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareHolding;
import io.portfol.manager.model.ShareTransaction;
import io.portfol.manager.model.entity.Role;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;
import io.portfol.manager.services.ShareService;

public class HoldingsControllerTests {
	
	private static final String USERNAME1 = "Bob Ross";
	private static final String PASSWORD1 = "HappyTrees";
	private static final String EMAIL1 = "bross@email.com";
	private static final LocalDateTime date = LocalDateTime.of(2019, 1, 1, 12, 00);
	private static final LocalDateTime date2 = LocalDateTime.of(2019, 1, 3, 12, 00);
	private static final LocalDateTime date3 = LocalDateTime.of(2019, 1, 2, 12, 00);
	private static final String FAKETOKEN = "Bearer 1234567";

	private JwtTokenService jwtTokenService;
	private UserRepository userRepo;
	private ShareService shareService;
	private HoldingsController holdingsController;
	
	@Before
	public void initTests() {
		jwtTokenService = mock(JwtTokenService.class);
		userRepo = mock(UserRepository.class);
		shareService = mock(ShareService.class);
		holdingsController = new HoldingsController(userRepo, shareService, jwtTokenService);
	}
	
	@Test
	public void test_getting_users_holdings() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		Share share2 = new Share("share2", 10.00, "SHT", "Share2 Company");
		
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		ShareTransaction st2 = new ShareTransaction(10.00, true, 1, share2, date2);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		portfolio.addShareTransaction(st2);
		
		when(jwtTokenService.getUsernameFromToken(FAKETOKEN.substring(7))).thenReturn(USERNAME1);
		when(userRepo.findByUsername(USERNAME1)).thenReturn(Optional.of(user1));
		
		List<HashMap<String, String>> holdings = holdingsController.getHoldings(FAKETOKEN);
		
		assertEquals(2, holdings.size());
		
		ShareHolding share1Holding = portfolio.getShareHolding(share1);
		ShareHolding share2Holding = portfolio.getShareHolding(share2);
		
		assertEquals(share1Holding.getShare().getSymbol(), holdings.get(0).get("symbol"));
		assertEquals(share1Holding.getTotalCost(), Double.parseDouble(holdings.get(0).get("buyPrice")), 0.0001);
		assertEquals(share1Holding.getTotalUnits(), Integer.parseInt(holdings.get(0).get("quantity")));
		assertEquals(share1Holding.getShare().getValue(), Double.parseDouble(holdings.get(0).get("currentPrice")), 0.0001);
		assertEquals(share1Holding.getTotalValue(), Double.parseDouble(holdings.get(0).get("currentValue")), 0.0001);
		assertEquals(share1Holding.getTotalValue() - share1Holding.getTotalCost(), Double.parseDouble(holdings.get(0).get("profit")), 0.0001);
		
		assertEquals(share2Holding.getShare().getSymbol(), holdings.get(1).get("symbol"));
		assertEquals(share2Holding.getTotalCost(), Double.parseDouble(holdings.get(1).get("buyPrice")), 0.0001);
		assertEquals(share2Holding.getTotalUnits(), Integer.parseInt(holdings.get(1).get("quantity")));
		assertEquals(share2Holding.getShare().getValue(), Double.parseDouble(holdings.get(1).get("currentPrice")), 0.0001);
		assertEquals(share2Holding.getTotalValue(), Double.parseDouble(holdings.get(1).get("currentValue")), 0.0001);
		assertEquals(share2Holding.getTotalValue() - share2Holding.getTotalCost(), Double.parseDouble(holdings.get(1).get("profit")), 0.0001);
	}
}
