import { Component, OnInit } from '@angular/core';
import { LugaresService } from 'src/app/services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-lugar',
  templateUrl: './crear-lugar.component.html',
  styleUrls: ['./crear-lugar.component.css']
})
export class CrearLugarComponent {

  lugar: any = {}
  id: string

  constructor(private lugaresService: LugaresService, route: ActivatedRoute) {
    this.id = route.snapshot.params['id']

    if (this.id != 'new') {
      lugaresService.buscarLugar(this.id).subscribe(lugar => this.lugar = lugar)
    }

  }

  public save() {

    if (this.id == 'new') {
      this.lugaresService.guardarLugar(this.lugar)
    } else {
      this.lugaresService.editarLugar(this.lugar)
    }
    this.lugar = {}
  }
}
