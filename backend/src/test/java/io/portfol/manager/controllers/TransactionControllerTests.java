package io.portfol.manager.controllers;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.mockito.Mockito.*;

import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;

import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.exception.ResourceNotFoundException;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareTransaction;
import io.portfol.manager.model.dto.TransactionRequest;
import io.portfol.manager.model.entity.Role;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;
import io.portfol.manager.services.ShareService;

public class TransactionControllerTests {
	
	private static final String USERNAME1 = "Bob Ross";
	private static final String PASSWORD1 = "HappyTrees";
	private static final String EMAIL1 = "bross@email.com";
	private static final LocalDateTime date = LocalDateTime.of(2019, 1, 1, 12, 00);
	private static final LocalDateTime date2 = LocalDateTime.of(2019, 1, 3, 12, 00);
	private static final LocalDateTime date3 = LocalDateTime.of(2019, 1, 2, 12, 00);
	private static final String FAKETOKEN = "Bearer 1234567";
	
	@Mock
	private JwtTokenService jwtTokenService;
	
	@Mock
	private UserRepository userRepo;
	
	@Mock
	private ShareService shareService;
	
	private TransactionsController transactionsController;
	
	@Before
	public void initTests() {
		MockitoAnnotations.initMocks(this);
		transactionsController = new TransactionsController(jwtTokenService, userRepo, shareService);
	}
	
	@Test
	public void test_get_transactions() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		Share share2 = new Share("share2", 10.00, "SHT", "Share2 Company");
		
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		ShareTransaction st2 = new ShareTransaction(24.68, true, 2, share1, date2);
		ShareTransaction st3 = new ShareTransaction(10.00, true, 1, share2, date3);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		portfolio.addShareTransaction(st2);
		portfolio.addShareTransaction(st3);
		
		when(jwtTokenService.getUsernameFromToken(FAKETOKEN.substring(7))).thenReturn(USERNAME1);
		when(userRepo.findByUsername(USERNAME1)).thenReturn(Optional.of(user1));
		
		List<HashMap<String, String>> transactionList = transactionsController.getTransactions(FAKETOKEN);
		
		assertEquals(3, transactionList.size());
		
		assertEquals(st1.getShare().getSymbol(), transactionList.get(0).get("share"));
		assertEquals(st1.isBuying(), Boolean.parseBoolean(transactionList.get(0).get("buying")));
		assertEquals(st1.getTotalPrice(), Double.parseDouble(transactionList.get(0).get("totalPrice")), 0.0001);
		assertEquals(st1.getUnits(), Integer.parseInt(transactionList.get(0).get("units")), 0.0001);
		assertEquals(st1.getAvgPrice(), Double.parseDouble(transactionList.get(0).get("avgPrice")), 0.0001);
		assertEquals(st1.getTransactionDate().format(DateTimeFormatter.ofPattern("yyyy/MM/dd")), transactionList.get(0).get("date"));
	}
	
	@Test
	public void test_make_new_transaction() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		ResponseEntity<String> response = null;
		
		Portfolio portfolio = new Portfolio(user1);
		user1.setPortfolio(portfolio);
		
		TransactionRequest transactionRequest = new TransactionRequest();
		
		transactionRequest.setBuying(true);
		transactionRequest.setDate("04/20/2020");
		transactionRequest.setShare("SHR");
		transactionRequest.setTotalPrice(30.00);
		transactionRequest.setUnits(5);
		
		when(jwtTokenService.getUsernameFromToken(FAKETOKEN.substring(7))).thenReturn(USERNAME1);
		when(shareService.getShare("SHR")).thenReturn(share1);
		when(userRepo.findByUsername(USERNAME1)).thenReturn(Optional.of(user1));
		
		try {
			response = transactionsController.newTransaction(FAKETOKEN, transactionRequest);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		assertEquals(HttpStatus.OK, response.getStatusCode());
		
		assertEquals(1, portfolio.getShareTransactions().size());
		assertEquals(portfolio.getShareTransactions().get(0).getShare(), share1);
		assertEquals(portfolio.getShareTransactions().get(0).getAvgPrice(), 6.00, 0.0001);
		assertEquals(portfolio.getShareTransactions().get(0).getTotalPrice(), 30.00, 0.0001);
		assertEquals(portfolio.getShareTransactions().get(0).getUnits(), 5);
		assertEquals(portfolio.getShareTransactions().get(0).getTransactionDate().format(DateTimeFormatter.ofPattern("MM/dd/yyyy")), "04/20/2020");
		assertTrue(portfolio.getShareTransactions().get(0).isBuying());
	}
	
	@Test(expected = ResourceNotFoundException.class)
	public void test_cant_make_new_transaction() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		
		Portfolio portfolio = new Portfolio(user1);
		user1.setPortfolio(portfolio);
		
		TransactionRequest transactionRequest = new TransactionRequest();
		
		transactionRequest.setBuying(true);
		transactionRequest.setDate("04/20/2020");
		transactionRequest.setShare("ABC");
		transactionRequest.setTotalPrice(30.00);
		transactionRequest.setUnits(5);
		
		when(jwtTokenService.getUsernameFromToken(FAKETOKEN.substring(7))).thenReturn(USERNAME1);
		when(shareService.getShare("ABC")).thenReturn(null);
		when(userRepo.findByUsername(USERNAME1)).thenReturn(Optional.of(user1));
		
		try {
			transactionsController.newTransaction(FAKETOKEN, transactionRequest);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void test_can_edit_transaction() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		Share share2 = new Share("share2", 10.00, "SHT", "Share2 Company");
		
		ResponseEntity<String> response = null;
		
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		st1.setId(1);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		
		assertEquals(1, portfolio.getShareTransactions().size());
		
		TransactionRequest transactionRequest = new TransactionRequest();
		
		transactionRequest.setBuying(false);
		transactionRequest.setDate("04/20/2020");
		transactionRequest.setShare("SHT");
		transactionRequest.setTotalPrice(30.00);
		transactionRequest.setUnits(5);

		when(jwtTokenService.getUsernameFromToken(FAKETOKEN.substring(7))).thenReturn(USERNAME1);
		when(shareService.getShare("SHT")).thenReturn(share2);
		when(userRepo.findByUsername(USERNAME1)).thenReturn(Optional.of(user1));
		
		response = transactionsController.editTransaction(FAKETOKEN, 1, transactionRequest);
		
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(1, portfolio.getShareTransactions().size());
		
		assertEquals(portfolio.getShareTransactions().get(0).getShare(), share2);
		assertEquals(portfolio.getShareTransactions().get(0).getAvgPrice(), 6.00, 0.0001);
		assertEquals(portfolio.getShareTransactions().get(0).getTotalPrice(), 30.00, 0.0001);
		assertEquals(portfolio.getShareTransactions().get(0).getUnits(), 5);
		assertEquals(portfolio.getShareTransactions().get(0).getTransactionDate().format(DateTimeFormatter.ofPattern("MM/dd/yyyy")), "04/20/2020");
		assertFalse(portfolio.getShareTransactions().get(0).isBuying());
	}
	
	@Test
	public void test_cant_edit_transaction() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		Share share2 = new Share("share2", 10.00, "SHT", "Share2 Company");
		
		ResponseEntity<String> response = null;
		
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		st1.setId(1);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		
		assertEquals(1, portfolio.getShareTransactions().size());
		
		TransactionRequest transactionRequest = new TransactionRequest();
		
		transactionRequest.setBuying(false);
		transactionRequest.setDate("04/20/2020");
		transactionRequest.setShare("SHT");
		transactionRequest.setTotalPrice(30.00);
		transactionRequest.setUnits(5);

		when(jwtTokenService.getUsernameFromToken(FAKETOKEN.substring(7))).thenReturn(USERNAME1);
		when(shareService.getShare("SHT")).thenReturn(null);
		when(userRepo.findByUsername(USERNAME1)).thenReturn(Optional.of(user1));
		
		response = transactionsController.editTransaction(FAKETOKEN, 1, transactionRequest);
		
		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
		assertEquals(1, portfolio.getShareTransactions().size());
		
		assertEquals(portfolio.getShareTransactions().get(0).getShare(), share1);
		assertEquals(portfolio.getShareTransactions().get(0).getAvgPrice(), 12.34, 0.0001);
		assertEquals(portfolio.getShareTransactions().get(0).getTotalPrice(), 12.34, 0.0001);
		assertEquals(portfolio.getShareTransactions().get(0).getUnits(), 1);
		assertEquals(portfolio.getShareTransactions().get(0).getTransactionDate().format(DateTimeFormatter.ofPattern("MM/dd/yyyy")), "01/01/2019");
		assertTrue(portfolio.getShareTransactions().get(0).isBuying());
	}
	
	@Test
	public void test_can_delete_transaction() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		
		ResponseEntity<String> response = null;
		
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		st1.setId(1);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		
		assertEquals(1, portfolio.getShareTransactions().size());

		when(jwtTokenService.getUsernameFromToken(FAKETOKEN.substring(7))).thenReturn(USERNAME1);
		when(userRepo.findByUsername(USERNAME1)).thenReturn(Optional.of(user1));
		
		response = transactionsController.deleteTransaction(FAKETOKEN, 1);
		
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(0, portfolio.getShareTransactions().size());
	}
	
	@Test
	public void test_cant_delete_transaction() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		
		ResponseEntity<String> response = null;
		
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		st1.setId(1);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		
		assertEquals(1, portfolio.getShareTransactions().size());

		when(jwtTokenService.getUsernameFromToken(FAKETOKEN.substring(7))).thenReturn(USERNAME1);
		when(userRepo.findByUsername(USERNAME1)).thenReturn(Optional.of(user1));
		
		response = transactionsController.deleteTransaction(FAKETOKEN, 2);
		
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(1, portfolio.getShareTransactions().size());
	}

}
