import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista:any = {};
  loading:boolean;
  topTracks:any [] = [];
  uri:string;

  constructor( private router:ActivatedRoute,
               private _spotify:SpotifyService ) { 
    this.loading=true;
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTrack(params['id']);
    });
   }

    getArtista( id:string ){
      this._spotify.getArtista(id).subscribe( data => {
        console.log(data);
        this.artista = data;
        this.loading = false;
      } );
    }

    getTopTrack(id:string){

      this._spotify.getTopTrack(id).subscribe( topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      } );
    }

}
