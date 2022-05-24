package io.portfol.manager.security;

import java.util.Collection;
import java.util.Collections;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import io.portfol.manager.model.entity.User;

public class JwtUserDetails implements UserDetails {

	private User user;

	public JwtUserDetails(User user) {
		super();
		this.user = user;
	}

	// ("ROLE_USER", "ROLE_ADMIN") -> 
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.user.getRoles().stream().map(r -> new SimpleGrantedAuthority(r.getRole()))
				.collect(Collectors.toList());
	}

	@Override
	public String getPassword() {
		return this.user.getEncryptedPassword();
	}

	@Override
	public String getUsername() {
		return this.user.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
