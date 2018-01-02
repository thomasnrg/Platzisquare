import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  lugares:any = [
    {plan: 'pagado' ,cercania: 1, distancia: 1, active: true, nombre: 'Negocio de Carros'},
    {plan: 'gratuito' ,cercania: 1, distancia: 1.8, active: true, nombre: 'Negocio de Mascotas'},
    {plan: 'pagado' ,cercania: 2, distancia: 5, active: true, nombre: 'Negocio de Telefonos'},
    {plan: 'gratuito' ,cercania: 3, distancia: 10, active: false, nombre: 'Negocio de Casas'},
    {plan: 'pagado' ,cercania: 3, distancia: 35, active: true, nombre: 'Negocio de Muebles'},
    {plan: 'pagado' ,cercania: 3, distancia: 120, active: false, nombre: 'Negocio de Desarrollo web'}
  ]
  lat:number = 4.8637461;
  lng:number = -75.0190383;


  constructor() {

  }
}
