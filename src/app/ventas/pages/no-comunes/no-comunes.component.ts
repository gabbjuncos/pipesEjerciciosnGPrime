import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',

})
export class NoComunesComponent{
  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro','Gabriel','Jorge'];
  pos : number = 0;

  clientesMapas = {
    '=0':'No tenemos ningun cliente esperando.',
    '=1':'Actualmente tenemos un cliente esperando.',
    '=2':'Actualmente tenemos dos cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  //i18nSelect
  nombre: string = 'gabriel';
  genero: string = 'masculino';

  // y se define el maping
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarCliente(){
    //this.nombre = this.clientes[this.pos];
    //console.log(this.nombre)

    //this.pos = this.pos + 1;

    this.nombre = 'Carla';
    this.genero= 'femenino';
    
  }

  borrarCliente(){

    this.clientes.pop();
    console.log(this.clientes.length)

  }

  // KeyValue Pipe , se crea obj literal

  persona = {
    nombre: 'Fernando',
    edad:35,
    direccion: 'Ottawa, Canada'
  }

  // JsonPipe

  heroes = [
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ]

  // Async Pipe 
  // se crea un obj observable
  miObservable = interval(1000); // valores del 0,1,2,3,4,5...
  
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data promesa');
    }, 3500);
  })
}
