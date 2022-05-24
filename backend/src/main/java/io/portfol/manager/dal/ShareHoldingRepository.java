package io.portfol.manager.dal;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import io.portfol.manager.model.ShareHolding;

public interface ShareHoldingRepository extends CrudRepository<ShareHolding, Integer> {

	public List<ShareHolding> findByShare_Id(int shareId);
}
