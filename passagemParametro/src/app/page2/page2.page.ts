import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],


})
export class Page2Page implements OnInit {

  nome = "string";
  data = "string";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.nome = this.activatedRoute.snapshot.paramMap.get('nome') ?? '';
    this.data = this.activatedRoute.snapshot.paramMap.get('data') ?? '';

  }

}
