package br.com.tokiomarine.seguradora.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.tokiomarine.seguradora.model.Client;
import br.com.tokiomarine.seguradora.repository.ClientRepository;

@Service
public class ClientService {
	
	@Autowired
	private ClientRepository clientRepository;
	
	public ResponseEntity<List<Client>> buscaTodosClients() {
		// BUSCA TODOS OS ITENS CADASTRADOS NO BANCO
		return ResponseEntity.status(HttpStatus.OK).body(clientRepository.findAll());
	}
	
	public ResponseEntity<Client> buscaClientPorId(long id) {
		// BUSCA O USUARIO POR ID, CASO EXISTA PERCORRE O Optional retornando por meio do map, retornando o dado caso ele exista, caso contrario retorna 404 item nao localizado
		return clientRepository.findById(id).map(
				resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build()
			);
	}
	
	public ResponseEntity<Client> cadastrarClient(Client client) {
		try { // CADASTRA O ITEM NO BANCO
			return ResponseEntity.status(HttpStatus.CREATED).body(clientRepository.save(client));
		} catch (Exception e) { // CASO DE ERRO NA CONSULTA RETORNA ERRO
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		} 
	}
	
	public ResponseEntity<Client> atualizarClient(Client client) {
		try {
			// BUSCA O USUARIO POR ID PARA ATUALIZA-LO
			Optional<Client> clientExistente = clientRepository.findById(Optional.ofNullable(client.getId()).orElse((long) 0));
			
			if(clientExistente.isPresent()) { // CASO LOCALIZE ATUALIZA O DADO
				return ResponseEntity.status(HttpStatus.OK).body(clientRepository.save(client));
			}else { // CASO NAO LOCALIZE RETORNA ITEM NAO LOCALIZADO
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
		} catch (Exception e) { // CASO DE ERRO NA CONSULTA RETORNA ERRO
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	public ResponseEntity<String> deletaClientPorId(long id) {
		Optional<Client> clientExistente = clientRepository.findById(id);
		
		if(clientExistente.isPresent()) {
			clientRepository.deleteById(id);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("O dado nao foi localizado.");
		}
		
		// BUSCA O USUARIO POR ID PARA ATUALIZA-LO
		clientExistente = clientRepository.findById(id);
		
		if(clientExistente.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_MODIFIED).body("O dado nao foi deletado.");
		}
		
		return ResponseEntity.status(HttpStatus.OK).body("Dado deletado com sucesso!");
	}
	
}
