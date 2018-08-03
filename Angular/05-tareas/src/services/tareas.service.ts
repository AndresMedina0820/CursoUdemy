import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable()
export class TareasService{

    tarea:Tarea [] = [];

    constructor() {
        const tarea1 = new Tarea('Recolectar la gemas del infinito');
        const tarea2 = new Tarea('Héroes a vencer');

        this.tarea.push(tarea1, tarea2);

        console.log(this.tarea);
    }

}