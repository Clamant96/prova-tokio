import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Addresses } from 'src/model/Addresses';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  private url = environment.apiUrlAPI;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Addresses[]> {
    return this.http.get<Addresses[]>(`${this.url}/addresses`);
  }

  getById(id: number): Observable<Addresses> {
    return this.http.get<Addresses>(`${this.url}/addresses/${id}`);
  }

  getByCep(cep: string): Observable<Addresses> {
    return this.http.get<Addresses>(`${this.url}/addresses/buscar/${cep}`);
  }

  postAddresses(addresses: Addresses): Observable<Addresses> {
    return this.http.post<Addresses>(`${this.url}/addresses`, addresses);
  }

  putAddresses(addresses: Addresses): Observable<Addresses> {
    return this.http.put<Addresses>(`${this.url}/addresses`, addresses);
  }

  deleteById(id: number): Observable<Addresses> {
    return this.http.delete<Addresses>(`${this.url}/addresses/${id}`);
  }

}
