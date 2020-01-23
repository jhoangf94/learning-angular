import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {

  lugares: any

  constructor( lugaresService: LugaresService) {
    lugaresService.getLugares()
      .subscribe( (lugares) => this.lugares = lugares)
  }

}
