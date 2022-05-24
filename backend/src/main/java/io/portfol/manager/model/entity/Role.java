package io.portfol.manager.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Role {

	@Id
	@GeneratedValue
	private int id;
	private String role;

	@ManyToMany(fetch = FetchType.EAGER, mappedBy = "roles")
	private List<User> users;

	public Role() {
	}

	public Role(String role) {
		super();
		this.role = role;
		this.users = new ArrayList<User>();
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void addUser(User user) {
		if (!users.contains(user)) {
			users.add(user);
		}
	}

	public void removeUser(User user) {
		if (users.contains(user)) {
			users.remove(user);
		}
	}

}
