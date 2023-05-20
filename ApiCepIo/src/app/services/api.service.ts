import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEndereco() {
    return this.http.get('viacep.com.br/ws/01001000/json/');
  }
}
