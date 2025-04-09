import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Addresses } from 'src/model/Addresses';
import { Client } from 'src/model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = environment.apiUrlAPI;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}/clients`);
  }

  getById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/clients/${id}`);
  }

  postClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}/clients`, client);
  }

  putClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/clients`, client);
  }

  deleteById(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.url}/clients/${id}`);
  }

}
