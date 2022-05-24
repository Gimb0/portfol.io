package io.portfol.manager.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import io.portfol.manager.model.Portfolio;

@Entity
public class User {

	@Id
	@GeneratedValue
	private int id;
	private String username;
	private String email;
	private String encryptedPassword;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "UserRoles")
	private List<Role> roles;

	@OneToOne(cascade = CascadeType.ALL)
	private Portfolio portfolio;

	public User() {
	}

	public User(String username, String email, String encryptedPassword) {
		super();
		this.username = username;
		this.email = email;
		this.encryptedPassword = encryptedPassword;
		this.roles = new ArrayList<Role>();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEncryptedPassword() {
		return encryptedPassword;
	}

	public void setEncryptedPassword(String encryptedPassword) {
		this.encryptedPassword = encryptedPassword;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	public Portfolio getPortfolio() {
		return portfolio;
	}

	public void setPortfolio(Portfolio portfolio) {
		this.portfolio = portfolio;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void addRole(Role role) {
		if (!roles.contains(role)) {
			roles.add(role);
		}
	}

	public void removeRole(Role role) {
		if (roles.contains(role)) {
			roles.remove(role);
		}
	}
	
	
}
