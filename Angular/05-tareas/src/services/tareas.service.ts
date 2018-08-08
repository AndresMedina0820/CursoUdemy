import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable()
export class TareasService{

    tarea:Tarea [] = [];

    constructor() {
        
        this.cargarStorage();

    //     const tarea1 = new Tarea('Recolectar la gemas del infinito');
    //     const tarea2 = new Tarea('Héroes a vencer');

    //     this.tarea.push(tarea1, tarea2);

    //     console.log(this.tarea);
    }

    agregarTarea( tareas: Tarea ){
        this.tarea.push(tareas);
        this.guardarStorage();
    }

    guardarStorage(){
        localStorage.setItem('data', JSON.stringify( this.tarea ))
    }

    cargarStorage(){
        if (localStorage.getItem('data')){
            this.tarea = JSON.parse(localStorage.getItem('data'));
        }else{
            this.tarea = [];
        }
    }

    BorrarLista(tareas:Tarea){
        this.tarea = this.tarea.filter( listaData => {
            return listaData.id !== tareas.id
        });

        this.guardarStorage();
    }
}