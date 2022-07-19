import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent implements OnInit {

  nombreLower:string = 'gabriel';
  nombreUpper:string = 'GABRIEL';
  nombreCompleto:string = 'gAbrIEl junCoS';

  fecha: Date = new Date(); // el dia de hoy


  constructor() { }

  ngOnInit(): void {
  }

}
