import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  private LUGARES_COLLECTION = "lugares"

  private lugares: any = [
    { id: 1, plan: 'pagado', distancia: 1, activo: true, nombre: "Paderia la cuty" },
    { id: 2, plan: 'pagado', distancia: 2, activo: false, nombre: "Gimnasio bodytech" },
    { id: 3, plan: 'gratis', distancia: 3, activo: false, nombre: "Panaderia marinillos" },
    { id: 4, plan: 'pagado', distancia: 1, activo: true, nombre: "Centro comercial la 14" },
  ]

  constructor(private afDB: AngularFirestore ) { }

  public getLugares(){
    return this.lugares
  }

  public buscarLugar(id:number){
    return this.lugares.filter((lugar: any) => lugar.id == id)[0] || null
  }

  public guardarLugar( lugar: any ){
    console.log(lugar)
    this.afDB.collection(this.LUGARES_COLLECTION).add(lugar)
  }

}
