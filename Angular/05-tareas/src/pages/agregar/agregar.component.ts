import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../models';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class AgregarPage{

    constructor( public _tareas:TareasService ){
        
    }

    tareaSeleccionada(tarea: Tarea){
        console.log(tarea);
        
    }
    
}