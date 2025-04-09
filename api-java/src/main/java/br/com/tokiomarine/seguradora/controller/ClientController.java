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

import br.com.tokiomarine.seguradora.model.Client;
import br.com.tokiomarine.seguradora.service.ClientService;

@RestController
@RequestMapping("/clients")
@CrossOrigin("*")
public class ClientController {
	
	@Autowired
	private ClientService clientService;
	
	@GetMapping
	public ResponseEntity<List<Client>> getAll() {
		return clientService.buscaTodosClients();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Client> getById(@PathVariable("id") long id) {
		return clientService.buscaClientPorId(id);
	}
	
	@PostMapping
	public ResponseEntity<Client> postClient(@RequestBody Client client) {
		return clientService.cadastrarClient(client);
	}
	
	@PutMapping
	public ResponseEntity<Client> putClient(@RequestBody Client client) {
		return clientService.atualizarClient(client);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable("id") long id) {
		return clientService.deletaClientPorId(id);
	}
	
}
