import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/informativo/dialog.component';
import { PersonasService } from '../service/persona.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Persona } from '../interface/persona.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: []
})

export class BusquedaComponent implements OnInit {

  termino: string = "";
  personas: Persona[] = [];
  nombre: string = ""
  personaSeleccionada: Persona | undefined;

  constructor(private personaService: PersonasService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  opcionSeleccionada(evento: MatAutocompleteSelectedEvent) {
    // Si no hay valor (opción vacía) el resto no se ejecuta (Se evita que se muestre un "Dialog" vacío)
    if (!evento.option.value) {
      return;
    }

    const persona: Persona = evento.option.value;

    // Abrir el diálogo y enviar los datos de la persona
    this.dialog.open(DialogComponent, {
      data: persona,
      width: "60%"
    });

    this.termino = "";                                                    // Borro el contenido del input de búsqueda por nombre
  }

  buscando() {
    this.personaService.obtenerSugerencias(this.termino.trim())
    .subscribe( (personas) => {
      this.personas = personas;
    })
  }

}
