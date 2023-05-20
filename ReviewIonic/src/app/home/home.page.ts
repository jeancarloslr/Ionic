import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
 
})
export class HomePage {
  n1: string ="";
  n2: string ="";
  soma: any;

  constructor(private Router: Router) {}
  
  somar(){
    this.soma = parseFloat(this.n1)*parseFloat(this.n2);
    this.Router.navigateByUrl(`/second-p/${this.soma}`)
  }
}
