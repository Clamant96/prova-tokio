import { Client } from './Client';

export class Addresses {
  public id?: number;
	public client?: Client;
	public address: string;
	public number: number;
	public complement: string;
	public postal_code: string;
	public city: string;
	public state: string;
	public country: string;

}
