import { AddressesService } from './../../service/AddressesService';
import { Client } from 'src/model/Client';
import { ClientService } from './../../service/ClientService';
import { Component, OnInit } from '@angular/core';
import { Addresses } from 'src/model/Addresses';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public client: Client = new Client();
  public listaClient: Client[] = [];

  public address: Addresses = new Addresses();
  public listaAddresses: Addresses[] = [];

  public isClientExistente: boolean = false;

  public isEditarAddresses: boolean = false;

  public clientExistente: any = [
    {
      id: 0,
      checked: false,
      span: 'Sim'
    },
    {
      id: 1,
      checked: true,
      span: 'Não'
    }
  ];

  constructor(
    private clientService: ClientService,
    private addressesService: AddressesService
  ) { }

  ngOnInit() {
    this.findAll();
  }

  findAllClients() {
    this.clientService.getAll().subscribe((resp: Client[]) => {
      this.listaClient = resp;
    });
  }

  findByCep(cep: string) {
    this.addressesService.getByCep(cep).subscribe((resp: any) => {

      this.address = resp;

    });
  }

  findAll() {
    this.addressesService.getAll().subscribe((resp: Addresses[]) => {

      this.listaAddresses = resp;

    });
  }

  enviaDados() {
    if(!this.isEditarAddresses) {
      this.postAddresses(this.address);
    }else {
      this.putAddresses(this.address);
    }
  }

  postAddresses(addresses: Addresses) {
    console.log('USUARIO: ', this.client);
    if(this.client.first_name && this.client.email) { // CASO SEJA DIFERENTE DE VAZIO ADICIONA O OBJETO AO ENDERECO
      addresses.client = this.client;
    }else {
      addresses.client = null;
    }

    this.addressesService.postAddresses(addresses).subscribe((resp: Addresses) => {

      this.isEditarAddresses = false;

      this.address = new Addresses();
      this.client = new Client();

      this.findAll();

    });
  }

  putAddresses(addresses: Addresses) {
    console.log('USUARIO: ', this.client);
    if(this.client.first_name && this.client.email) { // CASO SEJA DIFERENTE DE VAZIO ADICIONA O OBJETO AO ENDERECO
      addresses.client = this.client;
    }else {
      addresses.client = null;
    }

    this.addressesService.putAddresses(addresses).subscribe((resp: Addresses) => {

      this.isEditarAddresses = false;

      this.address = new Addresses();
      this.client = new Client();

      this.findAll();

    });
  }

  handleClientExistente(id: number) {
    console.log('id: ', id);
    this.clientExistente.map((item: any) => {
      if(item.id == id) {
        item.checked = true;
      }else {
        item.checked = false;
      }
    });

    this.clientExistente.map((item: any) => {
      if(item.id == 0 && item.checked) {
        this.findAllClients();

        this.isClientExistente = true;

      }else if(item.id == 1 && item.checked) {
        this.client = new Client();

        this.isClientExistente = false;

      }
    });

  }

  handleClient(event: any) {
    let id: number = event.target.value;

    console.log('ID CLIENTE: ', id);

    this.client = this.listaClient.find((client) => client.id == id);

  }

  handleCEP(event: any) {
    let cep: string = event.target.value;

    this.findByCep(cep);

  }

  capituraAddresses(event: any) {
    this.address = event;
    this.client = event.client;

    this.isEditarAddresses = true;

  }

}
