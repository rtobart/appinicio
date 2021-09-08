import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  personas=[{
    nombre:'Wacoldo',
    apellido:'soto',
    img:'../assets/img/a.png'
  },{
    nombre:'robin',
    apellido:'tobar',
    img:'../assets/img/a.png'
  },{
    nombre:'pipe',
    apellido:'tobar',
    img:'../assets/img/a.png'
  },{
    nombre:'nati',
    apellido:'retamal',
    img:'../assets/img/a.png'
  }]
  constructor() { }

  ngOnInit() {
  }

}
