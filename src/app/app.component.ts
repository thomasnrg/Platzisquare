import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  lugares:any = [
    {cercania: 1, distancia: 1, active: true, nombre: 'Negocio de Carros'},
    {cercania: 1, distancia: 1.8, active: true, nombre: 'Negocio de Mascotas'},
    {cercania: 2, distancia: 5, active: true, nombre: 'Negocio de Telefonos'},
    {cercania: 3, distancia: 10, active: false, nombre: 'Negocio de Casas'},
    {cercania: 3, distancia: 35, active: true, nombre: 'Negocio de Muebles'},
    {cercania: 3, distancia: 120, active: false, nombre: 'Negocio de Desarrollo web'}
  ]
  lat:number = 4.8637461;
  lng:number = -75.0190383;


  constructor() {

  }
}
