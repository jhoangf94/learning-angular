import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes/routes';
import { ContactoComponent } from './contacto/contacto.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { CrearLugarComponent } from './lugares/crear-lugar/crear-lugar.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    LugaresComponent,
    DetalleComponent,
    ContactoComponent,
    CrearLugarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
