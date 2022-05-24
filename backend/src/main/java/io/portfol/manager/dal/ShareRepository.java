package io.portfol.manager.dal;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import io.portfol.manager.model.Share;

public interface ShareRepository extends CrudRepository<Share, Integer> {

	public Optional<Share> findByName(String name);
	public Optional<Share> findBySymbol(String symbol);
}
