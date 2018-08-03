import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../models';
// import { NavController } from 'ionic-angular';
// import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage{

    constructor( public _tareas:TareasService ){
        
    }

    tareaSeleccionada(tarea: Tarea){
        console.log(tarea);
        
    }

    // agregarLista(){
    //     this.navCtrl.push( AgregarPage );
    // }
    
}