package io.portfol.manager.controllers;

import org.junit.Before;
import org.junit.Test;

import static org.mockito.Mockito.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.junit.Assert.*;

import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.exception.ResourceNotFoundException;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareTransaction;
import io.portfol.manager.model.entity.Role;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;
import io.portfol.manager.services.ShareService;

public class ShareControllerTests {
	
	private static final String USERNAME1 = "Bob Ross";
	private static final String PASSWORD1 = "HappyTrees";
	private static final String EMAIL1 = "bross@email.com";
	private static final LocalDateTime date = LocalDateTime.of(2019, 1, 1, 12, 00);
	private static final LocalDateTime date2 = LocalDateTime.of(2019, 1, 3, 12, 00);
	private static final LocalDateTime date3 = LocalDateTime.of(2019, 1, 2, 12, 00);
	private static final String FAKETOKEN = "Bearer 1234567";

	private JwtTokenService jwtTokenService;
	private ShareService shareService;
	private UserRepository userRepo;
	private SharesController shareController;
	
	@Before
	public void initTest() {
		jwtTokenService = mock(JwtTokenService.class);
		shareService = mock(ShareService.class);
		userRepo = mock(UserRepository.class);
		shareController = new SharesController(jwtTokenService, shareService, userRepo);
	}

	@Test
	public void test_controller_gets_all_shares() {
		List<Share> shares = new ArrayList<Share>();
		shares.add(new Share("Apple", 100.00, "AAPL", "Apple Inc."));
		shares.add(new Share("Tesla", 75.00, "TSLA", "Tesla"));
		shares.add(new Share("Google", 50.00, "GOOGL", "Alphabet Inc."));
		
		when(shareService.findAll()).thenReturn(shares);
		
		List<HashMap<String, String>> resultList = shareController.getAllShares(FAKETOKEN);
		
		for(int i = 0; i < shares.size(); i++) {
			assertEquals(shares.get(i).getSymbol(), resultList.get(i).get("symbol"));
			assertEquals(shares.get(i).getName(), resultList.get(i).get("name"));
			assertEquals(shares.get(i).getValue(), Double.parseDouble(resultList.get(i).get("value")), 0.001);
			assertEquals(shares.get(i).getCompany(), resultList.get(i).get("company"));
			assertNull(resultList.get(i).get("stockExchange"));
		}
	}
	
	@Test
	public void test_controller_gets_shares_owned_by_user() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		Share share2 = new Share("share2", 10.00, "SHT", "Share2 Company");
		
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		ShareTransaction st2 = new ShareTransaction(10.00, true, 1, share2, date2);
		ShareTransaction st3 = new ShareTransaction(10.00, false, 1, share2, date3);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		portfolio.addShareTransaction(st2);
		portfolio.addShareTransaction(st3);

		when(jwtTokenService.getUsernameFromToken(FAKETOKEN.substring(7))).thenReturn(USERNAME1);
		when(userRepo.findByUsername(USERNAME1)).thenReturn(Optional.of(user1));
		
		List<HashMap<String, String>> shareList = shareController.getOwnedShares(FAKETOKEN);
		assertEquals(1, shareList.size());
		
		HashMap<String, String> share1Map = shareList.get(0);
		assertEquals(share1Map.get("symbol"), share1.getSymbol());
		assertEquals(share1Map.get("name"), share1.getName());
		assertEquals(share1Map.get("value"), Double.toString(share1.getValue()));
		assertEquals(share1Map.get("stockExchange"), share1.getStockExchange());
		assertEquals(share1Map.get("company"), share1.getCompany());
	}
	
	@Test
	public void test_controller_gets_share_that_exists() {
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		
		when(shareService.getShare("SHR")).thenReturn(share1);
		
		Map<String, String> shareMap = shareController.getShare(FAKETOKEN, "SHR");
		
		assertEquals(share1.getSymbol(), shareMap.get("symbol"));
		assertEquals(share1.getName(), shareMap.get("name"));
		assertEquals(share1.getValue(), Double.parseDouble(shareMap.get("value")), 0.0001);
		assertEquals(share1.getStockExchange(), shareMap.get("stockExchange"));
		assertEquals(share1.getCompany(), shareMap.get("company"));
	}
	
	@Test(expected = ResourceNotFoundException.class)
	public void test_controller_exception_thrown() {
		when(shareService.getShare("SHR")).thenReturn(null);
		
		shareController.getShare(FAKETOKEN, "SHR");
	}
}
