import { Component, OnInit } from '@angular/core';
import { Persona } from '../interface/persona.interface';
import { PersonasService } from '../service/persona.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: []
})

export class ListadoComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personaService: PersonasService) { }

  ngOnInit(): void {
    this.personaService.listarPersonas()
    .subscribe( (respuesta) => {
      this.personas = respuesta;
    })
  }

}
