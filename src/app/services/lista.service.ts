import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ListaService {


  public listas:Lista [] = []; //se guardan el listado

  constructor(
    public alertController:AlertController,
    public toastController:ToastController
  ) { 
    this.cargarStorage()
  }

  crearLista(nombreLista:string){
    let ObjetoLista =  new Lista(nombreLista)
    this.listas.push(ObjetoLista) //ingresamos el array de listas al objeto con los datos creados
    return ObjetoLista.titulo;
  }

  guardarStorage(){
    let stringListas:string = JSON.stringify(this.listas) // convertimos el array a texto plano
    localStorage.setItem('listas',stringListas) //se debe ingresar los 2 parametros
  }

  cargarStorage(){
    const listaStorage = localStorage.getItem('listas')
    if(listaStorage === null){
      return this.listas = []
    }
    let ObjetoLista = JSON.parse(listaStorage)
    return this.listas= ObjetoLista;
  }

  eliminarLista(lista:Lista){
    let nuevoListado = this.listas.filter((listaItem) => listaItem.id !== lista.id) //guardamos todas las listas menos la lista a eliminar
    this.listas = nuevoListado
    this.guardarStorage()
  }

  editarLista(lista:Lista){
    let listaEditar= this.listas.find((listaItem) => listaItem.id === lista.id) // guardamos todas las listas menos la lista a eliminar, find devuelve el 1° valor que encuentra
    if(listaEditar){
      listaEditar.titulo = lista.titulo
    }
    this.guardarStorage()
  }

  obtenerLista(idLista : string | number){
    const id = Number(idLista); //parseamos el dato a number
    let lista = this.listas.find((itemLista) => itemLista.id === id)
    return lista;
  }
  
/**
 * @function validarInput
 * @description esta funcion valida que el input no este vacio, en caso de estar vacio 
 * mostrara un toast alerta indicando que debes ingresar un valor
 * @param {any} input recibe por parametro un input a validar
 * @returns {boolean} retorna un TRUE em caso de que este correcto
 * y retorna un FALSE en caso de que el campo este incompleto.
 */

ValidarInput(input: any):boolean{
  if(input && input.titulo){
    return true;
  }
 this.presentToast("debes ingresar un valor")
  return false
}

async presentToast(mensaje:string){
  let toast = await this.toastController.create({
    message:mensaje,
    duration:2000
  })
  toast.present();
}

}
