import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../models'

@Component({
    selector: 'terminado-page',
    templateUrl: 'terminado.component.html'
})

export class TerminadoPages{
    
    constructor( public _tareas:TareasService ){
        
    }

    // tareaSeleccionada(tarea:Tarea){
    //     console.log(tarea);
    // }

}