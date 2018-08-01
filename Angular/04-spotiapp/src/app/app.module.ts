import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

// Peticiones HTTP
import { HttpClientModule } from "@angular/common/http";

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//RUTAS
import { ROUTES } from './app.routes';

//SERVICE
import { SpotifyService } from './services/spotify.service';

//PIPES
import { NotimagePipe } from './pipes/notimage.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NotimagePipe,
    DomseguroPipe,
    CardsComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash:true} )
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
