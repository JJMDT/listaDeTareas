import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroListaPipe } from './filtro-lista.pipe'; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [FiltroListaPipe], // Declara el pipe aquí
  imports: [
    CommonModule
  ],
  exports: [FiltroListaPipe] // Y expórtalo aquí
})
export class PipeModule { }
