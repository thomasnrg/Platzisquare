import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  lugares:any = [
    {nombre: 'Instituto Leufer'},
    {nombre: 'NRG Developer Studio'},
    {nombre: 'Bqto Ink Tattoo Studio'}
  ]


  constructor() {

  }
}
