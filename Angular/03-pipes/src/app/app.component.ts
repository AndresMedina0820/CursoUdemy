import { Component } from '@angular/core';
import { resolve } from 'dns';
import { reject } from '../../node_modules/@types/q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = "Andres";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  porc = 0.58778;
  salario = 1234.5;
  heroe = {
    nombre: "Spiderman",
    clave: "Peter Paker",
    edad: 20,
    direccion:{
      pais: "USA",
      ciudad: "new york",
      calle: "Primera",
      casa: "5",
    }
  }
  valorDePromesa = new Promise( (resolve, reject)=>{
    setTimeout( ()=>resolve('¡Llego la data!'), 3500 );
  })

  fecha = new Date();

  video = 'C7IYYfrAE6A';

  activar: boolean = true;

}
