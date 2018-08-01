import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any;
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor( private _spotifyService:SpotifyService ) {

    this.loading = true;
    this.error = false;
    
    this._spotifyService.getNewRealeases().subscribe((data:any) =>{
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, ( errorS ) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorS.error.error.message;
    } )
  }

  ngOnInit() {
  }

}
