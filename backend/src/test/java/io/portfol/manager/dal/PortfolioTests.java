package io.portfol.manager.dal;

import static org.junit.Assert.assertNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDateTime;
import java.util.Collection;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import io.portfol.manager.ManagerApplication;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareTransaction;
import io.portfol.manager.model.entity.Role;
import io.portfol.manager.model.entity.User;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK, 
classes = ManagerApplication.class)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-test.properties")
public class PortfolioTests {
	
	private static final String USERNAME1 = "Bob Ross";
	private static final String PASSWORD1 = "HappyTrees";
	private static final String EMAIL1 = "bross@email.com";
	private static final LocalDateTime date = LocalDateTime.of(2019, 1, 1, 12, 00);
	private static final LocalDateTime date2 = LocalDateTime.of(2019, 1, 3, 12, 00);
	private static final LocalDateTime date3 = LocalDateTime.of(2019, 1, 2, 12, 00);
	
	@Autowired
	private ShareRepository shareRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private RoleRepository roleRepo;
	
	@Transactional
	@Test
	public void check_DB_made() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Company");
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		
		Iterable<User> users = userRepo.findAll();
		
		int numUsers = ((Collection<?>) users).size();
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		
		shareRepo.save(share1);
		userRepo.save(user1);
		roleRepo.save(role1);
		
		users = userRepo.findAll();
		
		assertEquals(numUsers + 1, ((Collection<?>) users).size()); // Change based on number of users created in DataLoader
	}
	
	@Transactional
	@Test
	public void check_transactions_recorded() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share Company");
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		ShareTransaction st2 = new ShareTransaction(24.68, true, 2, share1, date);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		portfolio.addShareTransaction(st2);
		
		shareRepo.save(share1);
		userRepo.save(user1);
		roleRepo.save(role1);
		
		User foundUser = userRepo.findByUsername(USERNAME1).get();
		
		Portfolio userPortfolio = foundUser.getPortfolio();
		
		assertEquals(2, userPortfolio.getShareTransactions().size());
	}
	
	@Transactional
	@Test
	public void check_holdings_updated_after_buy_transaction() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share Company");
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		ShareTransaction st2 = new ShareTransaction(24.68, true, 2, share1, date);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		portfolio.addShareTransaction(st2);
		
		shareRepo.save(share1);
		userRepo.save(user1);
		roleRepo.save(role1);
		
		User foundUser = userRepo.findByUsername(USERNAME1).get();
		
		Portfolio userPortfolio = foundUser.getPortfolio();
		
		userPortfolio.calculatePortfolioTotal();
		assertEquals(37.02, userPortfolio.getTotalValue(), 0.001);
		assertEquals(37.02, userPortfolio.getShareHolding(share1).getTotalCost(), 0.001);
	}
	
	@Transactional
	@Test
	public void check_holdings_updated_after_sell_transaction() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share Company");
		Portfolio portfolio = new Portfolio(user1);
		
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		ShareTransaction st2 = new ShareTransaction(24.68, true, 2, share1, date);
		ShareTransaction sellTransaction = new ShareTransaction(12.34, false, 1, share1, date);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		portfolio.addShareTransaction(st2);
		
		shareRepo.save(share1);
		userRepo.save(user1);
		roleRepo.save(role1);
		
		User foundUser = userRepo.findByUsername(USERNAME1).get();
		Portfolio userPortfolio = foundUser.getPortfolio();
		
		userPortfolio.calculatePortfolioTotal();
		assertEquals(37.02, userPortfolio.getTotalValue(), 0.001);
		
		portfolio.addShareTransaction(sellTransaction);
		userRepo.save(user1);
		
		foundUser = userRepo.findByUsername(USERNAME1).get();
		userPortfolio = foundUser.getPortfolio();
		userPortfolio.calculatePortfolioTotal();
		assertEquals(24.68, userPortfolio.getTotalValue(), 0.001);
		
		assertEquals(3, userPortfolio.getShareTransactions().size());
	}
	
	@Transactional
	@Test
	public void check_holdings_updated_after_share_value_changes() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		Share share2 = new Share("share2", 10.00, "SHT", "Share2 Company");
		
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		ShareTransaction st2 = new ShareTransaction(24.68, true, 2, share1, date2);
		ShareTransaction st3 = new ShareTransaction(12.34, true, 1, share1, date3);
		ShareTransaction st4 = new ShareTransaction(10.00, true, 1, share2, date3);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		portfolio.addShareTransaction(st2);
		portfolio.addShareTransaction(st3);
		portfolio.addShareTransaction(st4);
		
		shareRepo.save(share1);
		shareRepo.save(share2);
		userRepo.save(user1);
		roleRepo.save(role1);
		
		User foundUser = userRepo.findByUsername(USERNAME1).get();
		
		Portfolio userPortfolio = foundUser.getPortfolio();
		
		userPortfolio.calculatePortfolioTotal();
		
		assertEquals(49.36, userPortfolio.getShareHolding(share1).getTotalCost(), 0.001);
		assertEquals(10.00, userPortfolio.getShareHolding(share2).getTotalCost(), 0.001);
		
		assertEquals(59.36, userPortfolio.getTotalValue(), 0.001);
		assertEquals(49.36, userPortfolio.getShareHolding(share1).getTotalValue(), 0.001);
		assertEquals(10.00, userPortfolio.getShareHolding(share2).getTotalValue(), 0.001);
		
		share1.setValue(56.78);
		shareRepo.save(share1);
		
		userPortfolio.calculatePortfolioTotal();
		
		// Costs should stay the same
		assertEquals(49.36, userPortfolio.getShareHolding(share1).getTotalCost(), 0.001);
		assertEquals(10.00, userPortfolio.getShareHolding(share2).getTotalCost(), 0.001);
		
		assertEquals(237.12, userPortfolio.getTotalValue(), 0.001);
		assertEquals(227.12, userPortfolio.getShareHolding(share1).getTotalValue(), 0.001);
		assertEquals(10.00, userPortfolio.getShareHolding(share2).getTotalValue(), 0.001);
	}
	
	@Transactional
	@Test
	public void check_holdings_updated_after_transactions_deleted_and_edited() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		Share share2 = new Share("share2", 10.00, "SHT", "Share2 Company");
		
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		ShareTransaction st2 = new ShareTransaction(24.68, true, 2, share1, date);
		ShareTransaction st3 = new ShareTransaction(10.00, true, 1, share2, date);
		ShareTransaction st4 = new ShareTransaction(50.00, true, 5, share2, date);
		ShareTransaction st5 = new ShareTransaction(30.00, false, 3, share2, date);
		ShareTransaction st6 = new ShareTransaction(20.00, true, 5, share2, date);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		portfolio.addShareTransaction(st2);
		portfolio.addShareTransaction(st3);
		portfolio.addShareTransaction(st4);
		portfolio.addShareTransaction(st5);
		
		shareRepo.save(share1);
		shareRepo.save(share2);
		userRepo.save(user1);
		roleRepo.save(role1);
		
		User foundUser = userRepo.findByUsername(USERNAME1).get();
		
		Portfolio userPortfolio = foundUser.getPortfolio();
		ShareTransaction toBeDeleted = userPortfolio.getShareTransactions().get(0);
		ShareTransaction toBeEdited = userPortfolio.getShareTransactions().get(4);
		
		userPortfolio.calculatePortfolioTotal();
		assertEquals(37.02, userPortfolio.getShareHolding(share1).getTotalCost(), 0.001);
		assertEquals(30.00, userPortfolio.getShareHolding(share2).getTotalCost(), 0.001);
		assertEquals(67.02, userPortfolio.getTotalValue(), 0.001);
		
		userPortfolio.deleteTransaction(toBeDeleted.getId());
		userPortfolio.editTransaction(toBeEdited.getId(), st6);
		
		userPortfolio.calculatePortfolioTotal();
		assertEquals(24.68, userPortfolio.getShareHolding(share1).getTotalCost(), 0.001);
		assertEquals(80.00, userPortfolio.getShareHolding(share2).getTotalCost(), 0.001);
		assertEquals(134.68, userPortfolio.getTotalValue(), 0.001);
	}
	
	@Transactional
	@Test
	public void check_can_find_existing_share_holding() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		
		shareRepo.save(share1);
		userRepo.save(user1);
		roleRepo.save(role1);
		
		assertEquals(share1, portfolio.getShareHolding("SHR").getShare());
	}
	
	@Transactional
	@Test
	public void check_non_existant_share_holding_returns_null() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role("role1");
		Share share1 = new Share("share1", 12.34, "SHR", "Share1 Company");
		
		Portfolio portfolio = new Portfolio(user1);
		ShareTransaction st1 = new ShareTransaction(12.34, true, 1, share1, date);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user1.setPortfolio(portfolio);
		portfolio.addShareTransaction(st1);
		
		shareRepo.save(share1);
		userRepo.save(user1);
		roleRepo.save(role1);
		
		assertNull(portfolio.getShareHolding("SHR2"));
	}
}
