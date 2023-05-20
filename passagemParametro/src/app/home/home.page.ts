import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
 
})
export class HomePage {
  nome = "string";
  data = "string";
  constructor(private router: Router) {}

  OpenPage2(){

    this.router.navigateByUrl(`/page2/${this.nome}/${this.data}`);
    
  }
}

