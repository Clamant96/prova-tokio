package br.com.tokiomarine.seguradora.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.tokiomarine.seguradora.model.Addresses;

@Repository
public interface AddressesRepository extends JpaRepository<Addresses, Long> {

}
