import { HttpClient } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagasServiceService {
baseURL = "htp://www.localhost:4200/vagas"
  constructor(private http: HttpClient) {
  }

  create(dados : Vagas) : Observable<Vagas>{
    return this.http.post<Vagas>(this.baseURL, dados)
  }

  read() : Observable<Vagas[]> {
    return this.http.get<Vagas[]>(this.baseURL);
  }

  readById(id : number) : Observable<Vagas>{
    const url = '${this.baseURL}/${id}';
    return this.http.get<Vagas>(url);
  }

  updateVagas(dados : Vagas) : Observable<Vagas> {
    const url = ${this.baseURL}/${dados.id};
    return this.http.put<Vagas>(url)
  }
  deleteVagas(id : number) : Observable<Vagas>{
    const url = '${this.baseURL}/${id}';
    return this.http.delete<Vagas>(url);
  }

}
