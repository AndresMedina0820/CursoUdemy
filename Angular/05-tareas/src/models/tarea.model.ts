import { TareaItem } from './tarea-item.model';

export class Tarea{

    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: TareaItem[];

    constructor( titulo: string ) {
        this.titulo = titulo;
        this.terminada = false;
        this.creadaEn = new Date();
        this.items = [];

        this.id = new Date().getTime();
    }

}