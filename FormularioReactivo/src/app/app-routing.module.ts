import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './personas/agregar/agregar.component';
import { ListadoComponent } from './personas/listado/listado.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path: "",
    component: PrincipalComponent,
    pathMatch: "full"
  },
  {
    path: "agregar",
    component: AgregarComponent
  },
  {
    path: "listado",
    component: ListadoComponent
  },
  {
    path: "editar/:id",
    component: AgregarComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
