import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoComponent } from './personas/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import localeEs from '@angular/common/locales/es';
import { AgregarComponent } from './personas/agregar/agregar.component';
import { ImagenPipe } from './personas/pipes/imagen.pipe';

import { registerLocaleData } from '@angular/common';
import { BusquedaComponent } from './personas/busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { TablaComponent } from './personas/tabla/tabla.component';
import { DialogComponent } from './personas/dialog/informativo/dialog.component';
import { MostrarErroresComponent } from './personas/dialog/errores/mostrar-errores/mostrar-errores.component';
const LOCALE_ID = registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListadoComponent,
    AgregarComponent,
    BusquedaComponent,
    ImagenPipe,
    TablaComponent,
    DialogComponent,
    MostrarErroresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
