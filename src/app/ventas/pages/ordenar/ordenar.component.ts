import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',

})
export class OrdenarComponent {

  enMayusculas : boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuelva:true,
      color:Color.azul
    },
    {
      nombre: 'Batman',
      vuelva:false,
      color:Color.negro
    },
    {
      nombre: 'Robin',
      vuelva:false,
      color:Color.verde
    },
    {
      nombre: 'Daredevil',
      vuelva:false,
      color:Color.rojo
    },
    {
      nombre: 'Linterva Verde',
      vuelva:true,
      color:Color.verde
    },
  ]

  constructor() { }

 

  cambiar(){

    this.enMayusculas = !this.enMayusculas;
    

  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
    console.log(valor)
  }

}
