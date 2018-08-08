import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../../models';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(tareas: Tarea[], completada: boolean) {
    return tareas.filter( tarea => {
      return tarea.terminada === completada
    });
  }
}
