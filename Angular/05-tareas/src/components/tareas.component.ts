import { Component, Input } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { Tarea } from '../models/tarea.model';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';

@Component({
    selector: 'app-tareas',
    templateUrl: 'tareas.component.html'
})

export class TareasComponent{

    @Input() terminada: boolean = false;
    
    constructor(    public _tareas:TareasService, 
                    private navCtrl:NavController, 
                    private alertCtrl: AlertController)
                    {
        
    }

    tareaSeleccionada(tarea: Tarea){
        this.navCtrl.push( AgregarPage, {
            titulo: tarea.titulo,
            tarea: tarea
        });        
    }

    BorrarLista(tareas:Tarea){
        this._tareas.BorrarLista(tareas);
    }

    editarLista(tarea:Tarea, slidingItem:ItemSliding){

        slidingItem.close();

        const alerta = this.alertCtrl.create({
            title:'Editar tarea',
            message: 'Editar el nombre de esta lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de lista',
                value: tarea.titulo
            }],
            buttons:[{
                text: 'Cancelar'
            },
            {
                text: 'Actualizar',
                handler: data => {
                    if (data.titulo.length === 0) {
                        return;
                    }
                    tarea.titulo = data.titulo;
                    this._tareas.guardarStorage();
                }
            }
        ],
        });
        alerta.present();

    }

}