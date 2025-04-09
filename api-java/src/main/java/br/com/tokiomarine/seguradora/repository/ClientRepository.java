package br.com.tokiomarine.seguradora.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.tokiomarine.seguradora.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
