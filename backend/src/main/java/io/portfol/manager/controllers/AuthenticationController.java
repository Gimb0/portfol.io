package io.portfol.manager.controllers;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.portfol.manager.dal.RoleRepository;
import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.exception.UnsuccessfulLoginException;
import io.portfol.manager.exception.UnsuccessfulRegistrationException;
import io.portfol.manager.model.Portfolio;
import io.portfol.manager.model.dto.JwtRequest;
import io.portfol.manager.model.dto.JwtResponse;
import io.portfol.manager.model.dto.RegistrationRequest;
import io.portfol.manager.model.entity.Role;
import io.portfol.manager.model.entity.User;
import io.portfol.manager.security.JwtTokenService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

	public static final Pattern VALID_EMAIL_ADDRESS_REGEX = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
			Pattern.CASE_INSENSITIVE);

	private AuthenticationManager authManager;
	private UserDetailsService userDetailsService;
	private JwtTokenService jwtTokenService;
	private UserRepository userRepository;
	private RoleRepository roleRepository;
	private PasswordEncoder passwordEncoder;

	@Autowired
	public AuthenticationController(AuthenticationManager authManager, UserDetailsService userDetailsService,
			JwtTokenService jwtTokenService, UserRepository userRepository,RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
		super();
		this.authManager = authManager;
		this.userDetailsService = userDetailsService;
		this.jwtTokenService = jwtTokenService;
		this.userRepository = userRepository;
		this.roleRepository = roleRepository;
		this.passwordEncoder = passwordEncoder;
	}

	@PostMapping("/register")
	@ResponseStatus(HttpStatus.OK)
	public void processRegistration(@RequestBody RegistrationRequest registrationRequest) {
		String username = registrationRequest.getUsername();
		if(userRepository.findByUsername(username).isPresent())
			throw new UnsuccessfulRegistrationException("Username taken");

		Role userRole = roleRepository.findByRole("ROLE_USER").orElse(null);
		if(userRole == null) {
			userRole = new Role("ROLE_USER");
			roleRepository.save(userRole);
		}
		
		// Should validate input here
		String email = registrationRequest.getEmail();
		String password = registrationRequest.getPassword();
		
		if(!validateEmail(email))
			throw new UnsuccessfulRegistrationException("Invalid Email");
		
		User newUser = new User();
		newUser.setUsername(username);
		newUser.setEmail(email);
		newUser.setEncryptedPassword(passwordEncoder.encode(password));
		
		newUser.setRoles(Collections.singletonList(userRole));
		
		Portfolio newPortfolio = new Portfolio(newUser);
		newUser.setPortfolio(newPortfolio);

		userRepository.save(newUser);
	}

	@PostMapping("/login")
	@ResponseStatus(HttpStatus.OK)
	public JwtResponse processLogin(@RequestBody JwtRequest jwtRequest) {
		authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
		UserDetails userDetails = userDetailsService.loadUserByUsername(jwtRequest.getUsername());
		String token = jwtTokenService.generateToken(userDetails);
		return new JwtResponse(token);
	}

	private void authenticate(String username, String password) {
		try {
			authManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new UnsuccessfulLoginException("ACCOUNT_DISABLED", e);
		} catch (LockedException e) {
			throw new UnsuccessfulLoginException("ACCOUNT_LOCKED", e);
		} catch (BadCredentialsException e) {
			throw new UnsuccessfulLoginException("INVALID_CREDENTIALS", e);
		}
	}

	private boolean validateEmail(String emailStr) {
		Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
        return matcher.find();
	}
	
	@GetMapping("/isAdmin")
	@Secured({ "ROLE_ADMIN" })
	@ResponseStatus(HttpStatus.OK)
	public void isAdmin() {
	}
	
	@GetMapping("/isValidToken")
	@Secured({ "ROLE_ADMIN", "ROLE_USER" })
	@ResponseStatus(HttpStatus.OK)
	public void isLoggedIn() {
	}
	
	@GetMapping(value = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
	public Map<String, String> getUsername(@RequestHeader("Authorization") String token) {
		Map<String, String> response = new HashMap<String, String>();
		String username = jwtTokenService.getUsernameFromToken(token.substring(7));
		response.put("username", username);
		User user = userRepository.findByUsername(username).orElse(null);
		if(user != null) {
			List<Role> roles = user.getRoles();
			response.put("role", roles.get(0).getRole());
		}
		return response;
	}
}
