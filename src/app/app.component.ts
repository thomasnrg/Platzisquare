import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  a = 10;
  b = 25;
  listo = false;
  nombre:string = '';
  apellido:string = '';

  constructor() {
    setTimeout(() => {
      this.listo = true
    }, 3000)
  }

  hacerAlgo() {
    alert(`Bienvenido ${this.nombre} ${this.apellido}`)
  }
}
