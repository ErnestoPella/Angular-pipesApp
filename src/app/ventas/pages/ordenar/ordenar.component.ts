import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  enMayusculas: boolean = false;

  constructor(){}

  cambiarMayuscula(){
    this.enMayusculas = !this.enMayusculas;
  }
}
