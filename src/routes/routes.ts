import { LugaresComponent } from 'src/app/lugares/lugares.component'
import { Routes } from '@angular/router'
import { ContactoComponent } from 'src/app/contacto/contacto.component'
import { CrearLugarComponent } from 'src/app/lugares/crear-lugar/crear-lugar.component'


export const appRoutes: Routes = [
    { path: '', component: LugaresComponent },
    { path: 'lugares', component: LugaresComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'nuevo-lugar/:id', component: CrearLugarComponent },
]


