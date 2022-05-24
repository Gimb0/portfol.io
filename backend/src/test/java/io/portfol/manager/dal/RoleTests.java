package io.portfol.manager.dal;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
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
import io.portfol.manager.model.entity.Role;
import io.portfol.manager.model.entity.User;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK, 
classes = ManagerApplication.class)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-test.properties")
public class RoleTests {

	private static final String USERNAME1 = "Bob Ross";
	private static final String PASSWORD1 = "HappyTrees";
	private static final String EMAIL1 = "bross@email.com";
	
	private static final String USERNAME2 = "John Smith";
	private static final String PASSWORD2 = "Hello123";
	private static final String EMAIL2 = "jsmith@email.com";
	
	private static final String ROLE1 = "role1";
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private RoleRepository roleRepo;
	
	@Transactional
	@Test
	public void check_ROLE_ADMIN_exists() {
		Optional<Role> admin = roleRepo.findByRole("ROLE_ADMIN"); // Created in DataLoader
		
		assertTrue(admin.isPresent());
	}
	
	@Transactional
	@Test
	public void test_role_can_be_saved() {
		Role role1 = new Role(ROLE1);
		
		roleRepo.save(role1);
		
		Optional<Role> foundRoleOptional = roleRepo.findByRole(ROLE1);
		assertTrue(foundRoleOptional.isPresent());
		
		Role foundRole = foundRoleOptional.get();
		
		assertEquals(role1, foundRole);
	}
	
	@Transactional
	@Test
	public void test_role_can_have_users() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		User user2 = new User(USERNAME1, EMAIL1, PASSWORD1);
		Role role1 = new Role(ROLE1);
		
		ArrayList<User> users = new ArrayList<User>();
		users.add(user1);
		users.add(user2);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user2.addRole(role1);
		role1.addUser(user2);
		
		roleRepo.save(role1);
		userRepo.save(user1);
		userRepo.save(user2);
		
		Role foundRole = roleRepo.findByRole(ROLE1).get();
		
		assertEquals(2, foundRole.getUsers().size());
		assertEquals(users, foundRole.getUsers());
	}
	
	@Transactional
	@Test
	public void test_role_can_remove_users() {
		User user1 = new User(USERNAME1, EMAIL1, PASSWORD1);
		User user2 = new User(USERNAME2, EMAIL2, PASSWORD2);
		Role role1 = new Role(ROLE1);
		
		user1.addRole(role1);
		role1.addUser(user1);
		
		user2.addRole(role1);
		role1.addUser(user2);
		
		roleRepo.save(role1);
		userRepo.save(user1);
		userRepo.save(user2);
		
		Role foundRole = roleRepo.findByRole(ROLE1).get();
		
		assertEquals(2, foundRole.getUsers().size());
		
		role1.removeUser(user2);
		user2.removeRole(role1);
		
		roleRepo.save(role1);
		userRepo.save(user2);
		
		foundRole = roleRepo.findByRole(ROLE1).get();
		assertEquals(1, foundRole.getUsers().size());
		assertTrue(!(foundRole.getUsers().contains(user2)));
	}
}
