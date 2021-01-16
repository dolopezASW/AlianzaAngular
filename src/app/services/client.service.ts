import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private rootUrl:string = "http://localhost:8080/clients";
  private createUrl = this.rootUrl + '/createClient';
  private getClientsUrl = this.rootUrl + '/getClients';
  private filterClientsUrl  = this.rootUrl + '/filterClients';

  constructor(private http : HttpClient) { }

  createClient(client: Client): Observable<any>{
    return this.http.post(this.createUrl, client);
  }

  getClients(): Observable<any>{
    return this.http.get(this.getClientsUrl);
  }

  filterClient(): Observable<any>{
    return this.http.post(this.filterClientsUrl,null);
  }
}
