import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  lugares:any = [
    {active: true, nombre: 'Negocio de Carros'},
    {active: true, nombre: 'Negocio de Mascotas'},
    {active: true, nombre: 'Negocio de Telefonos'},
    {active: false, nombre: 'Negocio de Casas'},
    {active: true, nombre: 'Negocio de Muebles'},
    {active: false, nombre: 'Negocio de Desarrollo web'}
  ]
  lat:number = 4.8637461;
  lng:number = -75.0190383;


  constructor() {

  }
}
