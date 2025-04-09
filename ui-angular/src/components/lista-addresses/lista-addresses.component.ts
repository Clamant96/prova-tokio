import { AddressesService } from '../../service/AddressesService';
import { Client } from 'src/model/Client';
import { ClientService } from '../../service/ClientService';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Addresses } from 'src/model/Addresses';

@Component({
    selector: 'lista-addresses',
    templateUrl: './lista-addresses.component.html',
    styleUrls: ['./lista-addresses.component.scss']
})
export class ListaAddressesComponent implements OnInit {

  @Input() listaAddresses: Addresses[] = [];

  @Output() enviaAddresses = new EventEmitter<Addresses>();

  @Output() adicionarNovoAddresses = new EventEmitter<boolean>();

  constructor(
  ) { }

  ngOnInit() { }

  eviaAtualizacaoDeAddresses(addresses: Addresses) {
    this.enviaAddresses.emit(addresses);
  }

  eviaAtualizacaoDeAdicionarNovoAddresses(status: boolean) {
    this.adicionarNovoAddresses.emit(status);
  }

  rederizaClient() {

  }

  get listaItems(): Addresses[] {
    return this.listaAddresses;
  }

}
