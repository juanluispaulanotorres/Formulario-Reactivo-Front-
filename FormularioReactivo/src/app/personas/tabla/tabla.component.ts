import { Component, Input } from '@angular/core';
import { Persona } from '../interface/persona.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
    `
      [class*="mat-column-"] {
        width: 5%;
        text-align: center;
      }

    `
  ]
})

export class TablaComponent {

  @Input() personas: Persona[] = []

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'correo-empresa', 'correo-personal', 'ciudad', 'activo', 'f-creacion', 'f-finalizacion', 'imagen', 'editar'];

}
