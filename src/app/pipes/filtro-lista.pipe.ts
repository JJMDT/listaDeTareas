import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroLista',
  pure: false
})

export class FiltroListaPipe implements PipeTransform {
  transform(listas: Lista[], tipo: string) : Lista [] {
    if(!listas || !tipo){
      return listas;
    }
    
    switch (tipo) {
      case "por hacer":
       // Mostrar listas que no están completadas y que tienen al menos una actividad sin completar
       return listas.filter(lista =>
        !lista.completada && lista.item.some(actividad => !actividad.completado)
      );

      case "haciendo":
        // Listas que no están completadas y tienen al menos una actividad completada
        return listas.filter(lista =>
          !lista.completada && lista.item.some(actividad => actividad.completado)
        );

      case "terminado":
        // Listas que están completadas
        return listas.filter(lista => lista.completada);

      default:
        return listas;
    }
  }
     
  
}