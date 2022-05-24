package io.portfol.manager.dal;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

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
import io.portfol.manager.model.entity.Role;
import io.portfol.manager.model.entity.User;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK, 
classes = ManagerApplication.class)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-test.properties")
public class UserTests {
	
	private static final String USERNAME1 = "Bob Ross";
	private static final String PASSWORD1 = "HappyTrees";
	private static final String EMAIL1 = "bross@email.com";
	
	private static final String ROLE1 = "role1";
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private RoleRepository roleRepo;
	
	@Transactional
	@Test
	public void test_users_can_be_save_and_retrieved() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		userRepo.save(user1);
		
		Optional<User> foundUserOpt = userRepo.findByUsername(USERNAME1);
		assertTrue(foundUserOpt.isPresent());
		
		User foundUser = foundUserOpt.get();
		
		assertEquals(USERNAME1, foundUser.getUsername());
		assertEquals(EMAIL1, foundUser.getEmail());
		assertEquals(PASSWORD1, foundUser.getEncryptedPassword());
		
	}
	
	@Transactional
	@Test
	public void test_users_can_add_roles() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role(ROLE1);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		userRepo.save(user1);
		roleRepo.save(role1);
		
		User foundUser = userRepo.findByUsername(USERNAME1).get();
		
		assertEquals(1, foundUser.getRoles().size());
		assertTrue(foundUser.getRoles().contains(role1));
	}
	
	@Transactional
	@Test
	public void test_users_can_remove_roles() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role(ROLE1);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		userRepo.save(user1);
		roleRepo.save(role1);
		
		User foundUser = userRepo.findByUsername(USERNAME1).get();
		
		assertEquals(1, user1.getRoles().size());
		assertTrue(user1.getRoles().contains(role1));
		
		foundUser.removeRole(role1);
		userRepo.save(foundUser);
		roleRepo.save(role1);
		
		foundUser = userRepo.findByUsername(USERNAME1).get();
		
		assertEquals(0, foundUser.getRoles().size());
		assertTrue(!(foundUser.getRoles().contains(role1)));
	}
	
	@Transactional
	@Test
	public void test_users_can_add_portfolio_and_repo_cascades_portfolio() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Portfolio portfolio = new Portfolio(user1);
		user1.setPortfolio(portfolio);
		userRepo.save(user1);
		
		User foundUser = userRepo.findByUsername(USERNAME1).get();
		
		assertEquals(portfolio, foundUser.getPortfolio());
	}
}
