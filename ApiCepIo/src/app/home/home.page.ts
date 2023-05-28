import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';   


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  endereco: Observable<any> | undefined;

  constructor(private api: ApiService) {}

  cep: number | undefined;

  ngOnInit() {
    this.endereco = this.api.getEndereco();
  }

    buscar(){

      console.log(this.endereco);

     }  


}
