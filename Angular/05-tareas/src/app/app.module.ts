import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

//COMPONENTS
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { TerminadoPages } from '../pages/terminado/terminado.component';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { TareasComponent } from '../components/tareas.component';

//SERVICES
import { TareasService } from '../services/tareas.service';

//PIPES
import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadoPages,
    AgregarPage,
    FiltroCompletadoPipe,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadoPages,
    AgregarPage,
    TareasComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TareasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
