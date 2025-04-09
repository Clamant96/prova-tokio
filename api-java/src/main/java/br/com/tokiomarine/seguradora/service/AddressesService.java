package br.com.tokiomarine.seguradora.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;

import br.com.tokiomarine.seguradora.component.CepComponent;
import br.com.tokiomarine.seguradora.model.Addresses;
import br.com.tokiomarine.seguradora.model.AddressesDTO;
import br.com.tokiomarine.seguradora.model.Client;
import br.com.tokiomarine.seguradora.repository.AddressesRepository;
import br.com.tokiomarine.seguradora.repository.ClientRepository;

@Service
public class AddressesService {

	@Autowired
	private AddressesRepository addressesRepository;
	
	@Autowired
	private ClientRepository clientRepository;
	
	@Autowired
	private CepComponent cepProperties;
	
	public AddressesDTO buscaCEP(String cep) {

		try {
			
			// CONSUMO DE SERVIÇO
			String url = cepProperties.getUrlCep() + cep + "/json/";
			
			RestTemplate restTemplate = new RestTemplate();

			HttpHeaders headers = new HttpHeaders();
				headers.set("Content-Type", "application/json");
				// headers.set("Authorization", "Bearer " + token);

			HttpEntity<String> entity = new HttpEntity<String>(headers);
			
			ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
			
			System.out.println("responseEntity: "+ responseEntity);

			// SUCESSO
			if (responseEntity.getStatusCode().value() == 200) { 
				
				// DESERIALIZA
				AddressesDTO resp = new Gson().fromJson(responseEntity.getBody().toString(), AddressesDTO.class);
				
				return resp;
			} else {
				// ITEM NAO LOCALIZADO
				return null;
			}

		}
		catch (Exception e) {
			// ERRO NA BUSCA OU DESERIALIZA DO OBJ
			return null;
		}
	}
	
	public Addresses populaAddresses(AddressesDTO addressesDTO) {
		return new Addresses(
			addressesDTO.getLocalidade(),
			0,
			addressesDTO.getComplemento(),
			addressesDTO.getCep(),
			addressesDTO.getLocalidade(),
			addressesDTO.getEstado(),
			"Brasil"
		);
	}
	
	public ResponseEntity<List<Addresses>> buscaTodosAddresses() {
		// BUSCA TODOS OS ITENS CADASTRADOS NO BANCO
		return ResponseEntity.status(HttpStatus.OK).body(addressesRepository.findAll());
	}
	
	public ResponseEntity<Addresses> buscaAddressesPorId(long id) {
		// BUSCA O USUARIO POR ID, CASO EXISTA PERCORRE O Optional retornando por meio do map, retornando o dado caso ele exista, caso contrario retorna 404 item nao localizado
		return addressesRepository.findById(id).map(
				resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build()
			);
	}
	
	public ResponseEntity<Addresses> cadastrarAddress(Addresses addresses) {
		try { // CADASTRA O ITEM NO BANCO
			
			if(Optional.ofNullable(addresses.getClient()).orElse(null) != null) {
				if(Optional.ofNullable(addresses.getClient().getId()).orElse((long) 0) == 0) {
					Client clientCadastrado = clientRepository.save(addresses.getClient());
					
					if(clientCadastrado.getId() > 0) {
						addresses.setClient(clientCadastrado);
					}else {
						addresses.setClient(null);
					}
					
				}else {
					Optional<Client> clientExistente = clientRepository.findById(Optional.ofNullable(addresses.getClient().getId()).orElse((long) 0));
					
					if(clientExistente.isPresent()) {
						clientExistente.get().setFirst_name(Optional.ofNullable(addresses.getClient().getFirst_name()).orElse(null));
						clientExistente.get().setLast_name(Optional.ofNullable(addresses.getClient().getLast_name()).orElse(null));
						clientExistente.get().setEmail(Optional.ofNullable(addresses.getClient().getEmail()).orElse(null));
						
						Client client = clientRepository.save(clientExistente.get());
						
						addresses.setClient(client);
						
					}
				}
			}
			
			return ResponseEntity.status(HttpStatus.CREATED).body(addressesRepository.save(addresses));
		} catch (Exception e) { // CASO DE ERRO NA CONSULTA RETORNA ERRO
			System.out.println("ERRO: "+ e.toString());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		} 
	}
	
	public ResponseEntity<Addresses> atualizarAddress(Addresses addresses) {
		try {
			Optional<Client> clientExistente = clientRepository.findById(Optional.ofNullable(addresses.getClient().getId()).orElse((long) 0));
			
			if(clientExistente.isPresent()) { // ATUALIZA O USUARIO
				clientExistente.get().setFirst_name(Optional.ofNullable(addresses.getClient().getFirst_name()).orElse(null));
				clientExistente.get().setLast_name(Optional.ofNullable(addresses.getClient().getLast_name()).orElse(null));
				clientExistente.get().setEmail(Optional.ofNullable(addresses.getClient().getEmail()).orElse(null));
			}
			
			// BUSCA O ADDRESS POR ID PARA ATUALIZA-LO
			Optional<Addresses> addressesExistente = addressesRepository.findById(Optional.ofNullable(addresses.getId()).orElse((long) 0));
			
			if(addressesExistente.isPresent()) { // CASO LOCALIZE ATUALIZA O DADO
				return ResponseEntity.status(HttpStatus.OK).body(addressesRepository.save(addresses));
			}else { // CASO NAO LOCALIZE RETORNA ITEM NAO LOCALIZADO
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
		} catch (Exception e) { // CASO DE ERRO NA CONSULTA RETORNA ERRO
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	public ResponseEntity<String> deletaAddressPorId(long id) {
		Optional<Addresses> addressesExistente = addressesRepository.findById(id);
		
		if(addressesExistente.isPresent()) {
			addressesRepository.deleteById(id);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("O dado nao foi localizado.");
		}
		
		// BUSCA O USUARIO POR ID PARA ATUALIZA-LO
		addressesExistente = addressesRepository.findById(id);
		
		if(addressesExistente.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_MODIFIED).body("O dado nao foi deletado.");
		}
		
		return ResponseEntity.status(HttpStatus.OK).body("Dado deletado com sucesso!");
	}
	
}
