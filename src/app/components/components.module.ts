import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FiltroListaPipe } from "../pipes/filtro-lista.pipe";
import { PipeModule } from '../pipes/pipe.module';



@NgModule({
  declarations: 
  [ListasComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    PipeModule
],
  exports: [
    ListasComponent
  ]
})
export class ComponentsModule { }
