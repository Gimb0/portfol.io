package io.portfol.manager.dal;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import io.portfol.manager.model.ShareTransaction;

public interface ShareTransactionRepository extends CrudRepository<ShareTransaction, Integer> {

	public List<ShareTransaction> findByShare_Id(int share_id);
}
