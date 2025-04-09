package br.com.tokiomarine.seguradora.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.tokiomarine.seguradora.model.Addresses;
import br.com.tokiomarine.seguradora.model.AddressesDTO;
import br.com.tokiomarine.seguradora.service.AddressesService;

@RestController
@RequestMapping("/addresses")
@CrossOrigin("*")
public class AddressesController {
	
	@Autowired
	private AddressesService addressesService;
	
	@GetMapping
	public ResponseEntity<List<Addresses>> getAll() {
		return addressesService.buscaTodosAddresses();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Addresses> getById(@PathVariable("id") long id) {
		return addressesService.buscaAddressesPorId(id);
	}
	
	@GetMapping("/buscar/{cep}")
	public ResponseEntity<AddressesDTO> getByCep(@PathVariable("cep") String cep) {
		return addressesService.buscaCEP(cep);
	}
	
	@PostMapping
	public ResponseEntity<Addresses> postAddresses(@RequestBody Addresses addresses) {
		return addressesService.cadastrarAddress(addresses);
	}
	
	@PutMapping
	public ResponseEntity<Addresses> putAddresses(@RequestBody Addresses addresses) {
		return addressesService.atualizarAddress(addresses);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable("id") long id) {
		return addressesService.deletaAddressPorId(id);
	}
	
}
