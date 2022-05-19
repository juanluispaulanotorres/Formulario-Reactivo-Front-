import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../interface/persona.interface';

@Pipe({
  name: 'imagen',
  pure: false
})

export class ImagenPipe implements PipeTransform {

  transform(persona: Persona): string {
    if (persona.urlImagen != "")
      return persona.urlImagen;
    else
      return "assets/personas/sin-imagen.png";
  }

}
