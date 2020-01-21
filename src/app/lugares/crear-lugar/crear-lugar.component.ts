import { Component, OnInit } from '@angular/core';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-crear-lugar',
  templateUrl: './crear-lugar.component.html',
  styleUrls: ['./crear-lugar.component.css']
})
export class CrearLugarComponent {

  lugar: any = {}

  constructor(private lugaresService: LugaresService) { }

  public guardarLugar() {
    console.log(this.lugar)
    this.lugaresService.guardarLugar( this.lugar )
  }

}
