import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: 'clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  constructor() { }

  alerta:string = "alert-danger";
  loading:boolean = false;
  propiedades: Object = {

    danger: false

  }

  ngOnInit() {
  }
  
  ejecutar(){
    this.loading = true;
    setTimeout( ()=> this.loading = false, 3000 )

  }

}
