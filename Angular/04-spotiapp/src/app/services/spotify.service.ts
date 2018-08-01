import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) {
    console.log("Spotify Services Listo");
  }

  getQuery(query:any){

    const url = `https://api.spotify.com/v1/${query}`;
    
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBXlBM5CEY49NTI4I-61GKXh9TQO18ipKEs-OvKDKfyqZCbAXW9VjRvRNTHFtMM_UhrHI6pf3dx8knmqNM'
    })

    return this.http.get(url, {headers});

  }

  getNewRealeases(){

    return this.getQuery('browse/new-releases?limit=10').pipe( map( data => data['albums'].items));
  }

  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map( data => data['artists'].items ) );
  }

  getArtista(id:string){

    return this.getQuery(`artists/${id}`);
    // .pipe( map( data => data['artists'].items ) );
  }

  getTopTrack(id){

    return this.getQuery(`artists/${id}/top-tracks?country=es`)
    .pipe( map( data => data['tracks']));
  }
}
