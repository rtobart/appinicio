import { Component } from '@angular/core';
import { Opcionmenu } from './interfaces/opcionmenu';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones: Opcionmenu[] = [
    {
      destino: 'home',
      icono: 'home',
      texto: 'home'
    }, 
    {
      destino: 'page2',
      icono: 'list',
      texto: 'listas'
    }, 
    {
      destino: 'page3',
      icono: 'person',
      texto: 'personal'
    }, 
    {
      destino: 'page4',
      icono: 'alert-circle',
      texto: 'Alertas'
    },
    {
      destino :'sumar',
      icono: 'add',
      texto: 'Sumar'
    }]
  constructor() {}
}
