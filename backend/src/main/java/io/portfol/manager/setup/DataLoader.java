package io.portfol.manager.setup;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import io.portfol.manager.dal.RoleRepository;
import io.portfol.manager.dal.ShareRepository;
import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.dal.external.ShareDataHandler;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.Share;
import io.portfol.manager.model.ShareTransaction;
import io.portfol.manager.model.entity.Role;
import io.portfol.manager.model.entity.User;

@Component
public class DataLoader implements ApplicationRunner {

	private UserRepository userRepo;
	private RoleRepository roleRepo;
	private ShareRepository shareRepo;
	private PasswordEncoder passwordEncoder;

	@Autowired
	public DataLoader(UserRepository userRepo, RoleRepository roleRepo, ShareRepository shareRepo,
			PasswordEncoder passwordEncoder) {
		super();
		this.userRepo = userRepo;
		this.shareRepo = shareRepo;
		this.roleRepo = roleRepo;
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
//		Test getting share prices...
//		ShareDataHandler stockData = new ShareDataHandler();
//		Share tslaShare = stockData.getShare("TSLA");
//		Double tslaPrice = stockData.getSharePrice("");
//		System.out.println("Tesla price (share): " + tslaShare.getValue());
//		System.out.println("Share price:" + tslaPrice);

		initializeData();
	}

	private void loadRoles() {
		Role adminRole = new Role("ROLE_ADMIN");
		adminRole = roleRepo.save(adminRole);
		Role userRole = new Role("ROLE_USER");
		userRole = roleRepo.save(userRole);
	}

	private void loadUsers() {
		User user = new User("user1", "user1@email.com", passwordEncoder.encode("user1"));
		User adminUser = new User("admin", "admin@gmail.com", passwordEncoder.encode("admin"));
//		user.setRoles(Collections.singletonList(adminRole));
		userRepo.save(user);
		userRepo.save(adminUser);
	}

	private void loadShares() {
		Share share1 = new Share("Tesla", 1000.00, "TSLA", "Tesla");
		Share share2 = new Share("Apple", 360.00, "AAPL", "Apple");
		Share share3 = new Share("Google", 1400.00, "GOOGL", "Google");

		shareRepo.save(share1);
		shareRepo.save(share2);
		shareRepo.save(share3);
	}

	private void loadTransactions() {
		User user1 = userRepo.findByUsername("user1").get();
		Portfolio portfolio = user1.getPortfolio();
		Share teslaShare = shareRepo.findBySymbol("TSLA").get();
		Share appleShare = shareRepo.findBySymbol("AAPL").get();
		Share googleShare = shareRepo.findBySymbol("GOOGL").get();

		long time = System.currentTimeMillis();

		LocalDateTime date = LocalDateTime.of(2017, 1, 1, 12, 00);
		ShareTransaction st1 = new ShareTransaction(4000.00, true, 5, teslaShare, date);
		ShareTransaction st2 = new ShareTransaction(600.00, true, 5, appleShare, date);
		ShareTransaction st3 = new ShareTransaction(1000.00, true, 5, googleShare, date);

		date = LocalDateTime.of(2018, 1, 1, 12, 00);

		ShareTransaction st4 = new ShareTransaction(2000.00, true, 1, teslaShare, date);
		ShareTransaction st5 = new ShareTransaction(1800.00, false, 2, appleShare, date);
		ShareTransaction st6 = new ShareTransaction(4200.00, false, 3, googleShare, date);
		date = LocalDateTime.of(2019, 1, 1, 12, 00);

		ShareTransaction st7 = new ShareTransaction(2000.00, true, 2, teslaShare, date);
		ShareTransaction st8 = new ShareTransaction(1800.00, true, 5, appleShare, date);
		ShareTransaction st9 = new ShareTransaction(4200.00, true, 3, googleShare, date);
		date = LocalDateTime.of(2020, 1, 1, 12, 0);
		ShareTransaction st10 = new ShareTransaction(720.00, false, 2, appleShare, date);
		ShareTransaction st11 = new ShareTransaction(2000.00, true, 5, appleShare, date);
		ShareTransaction st12 = new ShareTransaction(6000.00, false, 3, googleShare, date);

		portfolio.addShareTransaction(st1);
		portfolio.addShareTransaction(st2);
		portfolio.addShareTransaction(st3);
		portfolio.addShareTransaction(st4);
		portfolio.addShareTransaction(st5);
		portfolio.addShareTransaction(st6);
		portfolio.addShareTransaction(st7);
		portfolio.addShareTransaction(st8);
		portfolio.addShareTransaction(st9);
		portfolio.addShareTransaction(st10);
		portfolio.addShareTransaction(st11);
		portfolio.addShareTransaction(st12);
		
		userRepo.save(user1);
	}

	private void initializeData() {
		loadShares();
		loadRoles();
		loadUsers();

		Role userRole = roleRepo.findByRole("ROLE_USER").get();
		User user1 = userRepo.findByUsername("user1").get();
		Portfolio portfolio = new Portfolio(user1);
		user1.setPortfolio(portfolio);

		userRole.addUser(user1);
		user1.addRole(userRole);

		roleRepo.save(userRole);
		userRepo.save(user1);

		Role adminRole = roleRepo.findByRole("ROLE_ADMIN").get();
		User adminUser = userRepo.findByUsername("admin").get();
		Portfolio adminPortfolio = new Portfolio(adminUser);
		adminUser.setPortfolio(adminPortfolio);
		adminRole.addUser(adminUser);
		adminUser.addRole(adminRole);

		roleRepo.save(adminRole);
		userRepo.save(adminUser);

		// System.out.println(user1 + ", " + savedUser + ", " + foundUser);

		loadTransactions();
	}

}