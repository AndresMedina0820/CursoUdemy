import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red; 
    }
  `]
})
export class TemplateComponent {

  usu:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: ""
  }

  paises= [
    {
    codigo: "COL",
    nombre: "Colombia"
    },
    {
      codigo: "ESP",
      nombre: "España"
    }
  ]

  constructor() { }

  guardar(forma:NgForm){
    console.log("Formulario enviado");
    console.log("ngForm: ", forma);
    console.log("Controls: ", forma.controls);
    console.log("Valor: ", forma.value);
    console.log("Objeto Usuario: ", this.usu);

  }

}
