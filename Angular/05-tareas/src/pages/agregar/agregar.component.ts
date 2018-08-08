import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea, TareaItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarPage{

    tarea:Tarea;
    nombreItem: string = "";

    constructor(    public _tareas:TareasService,
                    private navParams:NavParams
                )
                {
                    const titulo = this.navParams.get('titulo');

                    if ( this.navParams.get('tarea') ){
                        this.tarea = this.navParams.get('tarea');
                    }else{
                        this.tarea = new Tarea(titulo);
                        this._tareas.agregarTarea(this.tarea);   
                    }
    }   

    agregarItem(){
        if ( this.nombreItem.length === 0 ) {
            return;
        }

        const nuevoItem = new TareaItem(this.nombreItem);
        this.tarea.items.push(nuevoItem);
        this._tareas.guardarStorage();

        this.nombreItem='';
    }

    actualizarTarea(item:TareaItem){
        item.completado = !item.completado;

        const pendientes = this.tarea.items.filter(itemData => {
            return !itemData.completado;
        }).length;

        if ( pendientes === 0 ){
            this.tarea.terminada = true;
            this.tarea.terminadaEn = new Date();
        }else{
            this.tarea.terminada = false;
            this.tarea.terminadaEn = null;
        }
        console.log(pendientes);
        this._tareas.guardarStorage();
    }

    Borrar(idx){
        this.tarea.items.splice( idx, 1 );
        this._tareas.guardarStorage();
    }
                
}