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
    return this.afDB.collection(this.LUGARES_COLLECTION).valueChanges()
  }

  public buscarLugar(id: string){
    return this.afDB.doc(`${this.LUGARES_COLLECTION}/${id}`).valueChanges()
  }

  public guardarLugar( lugar: any ){
    lugar.id = this.afDB.createId()
    console.log(lugar)
    this.afDB.collection(this.LUGARES_COLLECTION).doc(lugar.id).set(lugar)
  }

  public editarLugar( lugar: any ) {
    this.afDB.collection(this.LUGARES_COLLECTION).doc(lugar.id).set(lugar)
  }

}
