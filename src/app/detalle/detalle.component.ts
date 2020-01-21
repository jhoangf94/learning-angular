import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent {

  private id: number
  public lugar: any
  private route: ActivatedRoute

  constructor(route: ActivatedRoute, lugaresService: LugaresService) {
    this.route = route
    this.id = this.route.snapshot.params['id']
    this.lugar = lugaresService.buscarLugar(this.id)

    console.log(this.route.snapshot.params['id'])
    console.log(this.route.snapshot.queryParams['action'])
    console.log(lugaresService.buscarLugar(this.id))

  }

}
