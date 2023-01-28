import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Ernesto';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarCliente(){
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  //i18nPlural
  clientes: string[] = ['Maria','Juan','Pedro','Eduardo','Ernesto'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  borrarCliente(){
    this.clientes.pop();
  }


  //KeyValuePipe

  persona = {
    nombre: 'Ernesto',
    edad: 22,
    direccion: 'La habana,Cuba'
  }


  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    },3500);
  })

}
