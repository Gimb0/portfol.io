package io.portfol.manager.dal;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import io.portfol.manager.model.entity.User;

public interface UserRepository extends CrudRepository<User, Integer>{

	public User findByPortfolio_Id(int portfolioId);
	Optional<User> findByUsername(String username);
	List<User> findAll();
}
