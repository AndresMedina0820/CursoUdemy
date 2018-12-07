import { Component, OnInit } from '@angular/core';
import { Heroe } from "../../interfaces/heroe.interface";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    name:"",
    bio:"",
    home:"Marvel"
  }

  constructor() { }

  ngOnInit() {
  }

}
