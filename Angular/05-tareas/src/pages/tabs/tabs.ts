import { Component } from '@angular/core';

import { PendientesPage } from '../pendientes/pendientes.component';
import { TerminadoPages } from '../terminado/terminado.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesPage;
  tab2Root = TerminadoPages;
  
  constructor() {

  }
}
