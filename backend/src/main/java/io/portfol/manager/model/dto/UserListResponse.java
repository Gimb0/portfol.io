package io.portfol.manager.model.dto;

import java.util.ArrayList;
import java.util.List;

import io.portfol.manager.model.entity.User;

public class UserListResponse {
	List<UserResponse> allUsers;

	public UserListResponse() {
		allUsers = new ArrayList<>();
	}
	
	public List<UserResponse> getAllUsers() {
		return allUsers;
	}

	public void setAllUsers(List<UserResponse> allUsers) {
		this.allUsers = allUsers;
	}
	
	public void addUser(UserResponse user) {
		allUsers.add(user);
	}

}
