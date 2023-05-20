import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-p',
  templateUrl: './second-p.page.html',
  styleUrls: ['./second-p.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SecondPPage implements OnInit {
  
  n1: any;
  n2: any;
  soma: any;


  constructor(private AtivaR: ActivatedRoute) { }

  ngOnInit() {
    this.soma = this.AtivaR.snapshot.paramMap.get('soma');
   
  }

}
