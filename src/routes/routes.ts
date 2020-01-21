import { LugaresComponent } from 'src/app/lugares/lugares.component'
import { DetalleComponent } from 'src/app/detalle/detalle.component'
import { Routes } from '@angular/router'
import { ContactoComponent } from 'src/app/contacto/contacto.component'
import { CrearLugarComponent } from 'src/app/lugares/crear-lugar/crear-lugar.component'


export const appRoutes: Routes = [
    { path: '', component: LugaresComponent },
    { path: 'lugares', component: LugaresComponent },
    { path: 'detalle/:id', component: DetalleComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'nuevo-lugar', component: CrearLugarComponent },
]


