import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from '../../interface/persona.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [
    `
      .bottom {
        margin-top: 5%;
      }
    `
  ]
})

export class DialogComponent {

  constructor(public dialog: MatDialog, 
              @Inject(MAT_DIALOG_DATA) public persona: Persona) { }         // Se inyectan los datos recibidos desde "busqueda.component.ts" para añadirlos al "dialog"

}
