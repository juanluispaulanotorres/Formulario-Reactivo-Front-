import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interface/persona.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PersonasService {

  url: string = environment.url;

  constructor(private httpService: HttpClient) { }

  listarPersonas(): Observable<Persona[]> {
    return this.httpService.get<Persona[]>(`${this.url}/personas`);
  }

  añadirPersona(persona: Persona): Observable<Persona> {
    return this.httpService.post<Persona>(`${this.url}/personas`, persona);
  }

  obtenerPersona(id: string): Observable<Persona> {
    return this.httpService.get<Persona>(`${this.url}/personas/${id}`);
  }

  obtenerSugerencias(termino: string): Observable<Persona[]> {
    return this.httpService.get<Persona[]>(`${this.url}/personas?q=${termino}&_limit=6`);
  }

  buscarPorNombre(nombre: string): Observable<Persona> {
    return this.httpService.get<Persona>(`${this.url}/personas?q=${nombre}`);
  }

  modificarPersona(persona: Persona): Observable<Persona> {
    return this.httpService.put<Persona>(`${this.url}/personas/${persona.id}`, persona);
  }

  eliminarPersona(idPersona: string): Observable<Persona> {
    return this.httpService.delete<Persona>(`${this.url}/personas/${idPersona}`);
  }

}
