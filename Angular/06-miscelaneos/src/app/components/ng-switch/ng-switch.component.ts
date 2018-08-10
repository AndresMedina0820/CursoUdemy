import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  alert:string[] = ['success', 'warning', 'dark', 'info'];
  alerta:string;

  constructor() { }

  ngOnInit() {
  }

  // Cambio(){
  //   for (let i = 0; i < alert.length; i++) {
  //     this.alerta = alert[i];
  //     console.log("Funciona");
  //   }
  // }

}
