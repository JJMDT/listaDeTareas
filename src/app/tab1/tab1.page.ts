import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ListaService } from '../services/lista.service';
import { CommonModule } from '@angular/common';
import { Lista } from '../models/lista.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  constructor(
    public alertController:AlertController,
    public toastController: ToastController,
    public listaService: ListaService
  ) {}


/**
 * @function AgregarLista
 * @description la funcion sera ejecutada cuando el usuario haga click en el boton agregar
 * muestra una alerta donde solicita el nombre de la lista
 */
async AgregarLista() {
  let alerta = await this.listaService.alertController.create({
  header: "Agregar lista",
  inputs: [
  {
  type: "text",
  name: "titulo",
  placeholder: "Ingresar nombre de la lista"
  }
  ],
  buttons:[
   {
      text: "Cancelar",
      role: "cancel"
      },
      {
      text: "Crear",
      handler: (data:any)=> {
        let esValido: boolean = this.listaService.ValidarInput(data)
          if (esValido){
            let creadaOk= this.listaService.crearLista(data.titulo);
            if(creadaOk){
              this.listaService.presentToast("Lista creada con exito")
            }
          }
        }
      }
    ]
  })
  await alerta.present();
  console.log('click btn');
}

}
