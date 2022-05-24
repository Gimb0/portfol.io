package io.portfol.manager.dal;

import org.springframework.data.repository.CrudRepository;

import io.portfol.manager.model.Portfolio;

public interface PortfolioRepository extends CrudRepository<Portfolio, Integer> {

	public Portfolio findByUser_Id(int userId);
}
