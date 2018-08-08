import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../models';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage{

    constructor(    public _tareas:TareasService, 
                    private navCtrl:NavController,
                    private alertCtrl:AlertController   
                ){
        
    }

    tareaSeleccionada(tarea: Tarea){
        this.navCtrl.push( AgregarPage, {
            titulo: tarea.titulo,
            tarea: tarea
        });        
    }

    agregarTarea(){
        const alerta = this.alertCtrl.create({
            title:'Nueva tarea',
            message: 'Nombre de la nueva tarea que desea',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de tarea'
            }],
            buttons:[{
                text: 'Cancelar'
            },
            {
                text: 'Guardar',
                handler: data => {
                    if (data.titulo.length === 0) {
                        return;
                    }
                    this.navCtrl.push( AgregarPage, {
                        titulo: data.titulo
                    });
                }
            }
        ],
        });
        alerta.present();
    }

    BorrarLista(tareas:Tarea){
        this._tareas.BorrarLista(tareas);
    }
    
}