import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'ernesto';
  nombreUpper: string = 'ERNESTO';
  nombreCompleto: string = 'ernEsto PeLLa';

  fecha: Date = new Date();

}
