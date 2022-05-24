package io.portfol.manager.controllers;

import static org.mockito.Mockito.*;

import java.util.Map;
import java.util.Optional;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.mockito.InOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

import io.portfol.manager.dal.RoleRepository;
import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.exception.UnsuccessfulLoginException;
import io.portfol.manager.exception.UnsuccessfulRegistrationException;
import io.portfol.manager.model.dto.JwtRequest;
import io.portfol.manager.model.dto.JwtResponse;
import io.portfol.manager.model.dto.RegistrationRequest;
import io.portfol.manager.model.entity.Role;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;
import io.portfol.manager.security.JwtUserDetails;

public class AuthenticationControllerTest {

	private AuthenticationController authController;
	private AuthenticationManager authManager;
	private UserDetailsService userDetailsService;
	private JwtTokenService jwtTokenService;
	private UserRepository userRepository;
	private RoleRepository roleRepository;
	private PasswordEncoder passwordEncoder;

	
	@Before
	public void setUpBeforeClass() throws Exception {
		authManager = mock(AuthenticationManager.class);
		userDetailsService = mock(UserDetailsService.class);
		jwtTokenService = mock(JwtTokenService.class);
		userRepository = mock(UserRepository.class);
		roleRepository = mock(RoleRepository.class);
		passwordEncoder = mock(PasswordEncoder.class);
		authController = new AuthenticationController(authManager, userDetailsService, jwtTokenService, userRepository, roleRepository, passwordEncoder);
	}

	@Test
	public void that_login_succeeds_with_right_credentials() {
		JwtRequest loginRequest = new JwtRequest();
		loginRequest.setUsername("user1");
		loginRequest.setPassword("user1");

		User user = new User("user1", "user1@email.com", "user1");
		UserDetails userDetails = new JwtUserDetails(user);
		String token = "test";
		JwtResponse response = new JwtResponse(token);

		when(userDetailsService.loadUserByUsername(loginRequest.getUsername())).thenReturn(userDetails);
		when(jwtTokenService.generateToken(userDetails)).thenReturn(token);

		assertEquals(response.getJwtToken(), authController.processLogin(loginRequest).getJwtToken());
	}

	@Test(expected = UnsuccessfulLoginException.class)
	public void that_login_fails_with_invalid_credentials() throws UnsuccessfulLoginException {
		JwtRequest loginRequest = new JwtRequest();
		loginRequest.setUsername("user1");
		loginRequest.setPassword("wrongPassword");

		when(authManager.authenticate(any())).thenThrow(new BadCredentialsException("INVALID_CREDENTIALS"));
		
		authController.processLogin(loginRequest);
	}
	
	@Test
	public void that_register_succeeds_with_valid_details() {
		RegistrationRequest request = new RegistrationRequest();
		request.setUsername("user2");
		request.setEmail("user2@email.com");
		request.setPassword("password");
		
		User existingUser = new User("user1", "user1@email.com", "password");
		Optional<User> optionalUser = Optional.of(existingUser);
		
		when(userRepository.findByUsername(existingUser.getUsername())).thenReturn(optionalUser);
		
		authController.processRegistration(request);
		
		InOrder inOrder = inOrder(userRepository);
		
		inOrder.verify(userRepository).findByUsername(request.getUsername());
		inOrder.verify(userRepository).save(any());
	}

	@Test(expected = UnsuccessfulRegistrationException.class)
	public void that_register_fails_with_existing_username_credential() {
		RegistrationRequest request = new RegistrationRequest();
		request.setUsername("user1");
		request.setEmail("user1@email.com");
		request.setPassword("password");
		
		User existingUser = new User("user1", "user1@email.com", "password");
		Optional<User> optionalUser = Optional.of(existingUser);
		
		when(userRepository.findByUsername(anyString())).thenReturn(optionalUser);
		
		authController.processRegistration(request);
	}
	
	@Test(expected = UnsuccessfulRegistrationException.class)
	public void that_register_fails_with_invalid_credentials() {
		RegistrationRequest request = new RegistrationRequest();
		request.setUsername("user1");
		request.setEmail("us/er@user.co@$m");
		request.setPassword("password");
		
		Optional<User> empty = Optional.empty();
		
		when(userRepository.findByUsername(anyString())).thenReturn(empty);
		
		authController.processRegistration(request);
	}
	
	@Test
	public void that_isAdmin_is_callable() {
		authController.isAdmin();
	}
	
	@Test
	public void that_getUsername_returns_map() {
		assertTrue(authController.getUsername("AAAABBBB") instanceof Map);
	}
	
	@Test
	public void that_getUsername_with_user_returns_map() {
		User user = new User("user1", "user1@email.com", "password");
		user.addRole(new Role());
		Optional<User> optionalUser = Optional.of(user);
		
		when(jwtTokenService.getUsernameFromToken(anyString())).thenReturn("user1");
		when(userRepository.findByUsername(anyString())).thenReturn(optionalUser);
		
		Map<String, String> result = authController.getUsername("AAAABBBB");
		
		assertTrue(result instanceof Map);
		assertEquals("user1", result.get("username"));
	}
}