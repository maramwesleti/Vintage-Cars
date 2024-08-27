
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private httpClient: HttpClient) {}

  getListproduits(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/produits/${environment.prefix}`);
  }

  getOneproduits(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/produits/${environment.prefix}/${id}`);
  }
  postproduit(data: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/produits/${environment.prefix}`, data);
  }

  updateproduit(data: any): Observable<any> {
    const {  idProduit,nomProduit, prixProduit, dateCreation } = data;
    return this.httpClient.put<any>(
      `${environment.apiUrl}/produits/${environment.prefix}`, 
      { 
        "idProduit":idProduit,
        "nomProduit": nomProduit,
        "prixProduit": prixProduit,
        "dateCreation": dateCreation
      }
    );
  }
  
  deleteproduits(id: number): Observable<any[]> {
    return this.httpClient.delete<any[]>(`${environment.apiUrl}/produits/${environment.prefix}/${id}`);
  }

}
