package io.portfol.manager.dal;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import io.portfol.manager.model.entity.Role;
import io.portfol.manager.model.entity.User;

public interface RoleRepository extends CrudRepository<Role, Integer> {

	Optional<Role> findByRole(String role);
}
