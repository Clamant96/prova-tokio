package br.com.tokiomarine.seguradora.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "clients")
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	private String first_name;
	
	private String last_name;
	
	@NotNull
	@Email
	private String email;
	
	/* @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("client")
	private List<Addresses> addresses = new ArrayList<>(); */

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	/* public List<Addresses> getAddresses() {
		return addresses;
	}

	public void setAddresses(List<Addresses> addresses) {
		this.addresses = addresses;
	} */
	
}
