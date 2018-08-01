import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas:any[]=[];
  loading:boolean;

  constructor( private _spotifyArtista:SpotifyService ) { }

  buscarArtista(termino: string){

    this.loading=true;

    this._spotifyArtista.getArtistas(termino).subscribe((data:any)=>{
      console.log(data);
      this.artistas = data;
      this.loading = false;
    })
  }
}
