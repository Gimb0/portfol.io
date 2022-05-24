package io.portfol.manager.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import io.portfol.manager.dal.UserRepository;
import io.portfol.manager.model.entity.User;

@Component
public class JwtUserDetailsService implements UserDetailsService {

	private UserRepository userRepo;

	@Autowired
	public JwtUserDetailsService(UserRepository userRepo) {
		super();
		this.userRepo = userRepo;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User foundUser = userRepo.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("Username does not exist"));
		return new JwtUserDetails(foundUser);
	}

}
