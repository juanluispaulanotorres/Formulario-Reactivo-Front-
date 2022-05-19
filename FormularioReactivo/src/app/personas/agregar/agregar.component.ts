import { Component, OnInit } from '@angular/core';
import { Persona } from '../interface/persona.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from '../service/persona.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      .example-radio-group {
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        align-items: flex-start;
      }

      .example-radio-button {
        margin: 5px;
      }

      .id {
        display: none;
      }
    `
  ]
})

export class AgregarComponent implements OnInit {

  // Es necesario inicializar todas las propiedades del objeto para que no haya problemas al acceder a la página de agregar persona

  persona: Persona = {
    id: "",
    usuario: '',
    nombre: '',
    apellido: '',
    password: '',
    rPasswd: '',
    correo_empresa: '',
    correo_personal: '',
    ciudad: '',
    activo: '',
    f_creacion: new Date,
    f_finalizacion: new Date,
    urlImagen: ""
  }

  form = new FormGroup({
    id: new FormControl(''),
    usuario: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl(''),
    ciudad: new FormControl(''),
    password: new FormControl('', Validators.required),
    rPasswd: new FormControl('', Validators.required),
    correo_empresa: new FormControl('', [Validators.required, Validators.email]),
    correo_personal: new FormControl('', [Validators.required, Validators.email]),
    activo: new FormControl('', Validators.required),
    f_creacion: new FormControl('', Validators.required),
    f_finalizacion: new FormControl('', Validators.required),
    urlImagen: new FormControl('')
  })

  constructor(private rutaActiva: ActivatedRoute, 
              private personaService: PersonasService, 
              private route: Router,
              private fb: FormBuilder,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    // Leer el parámetro de la ruta (id) para obtener los datos del usuario (edición)
    if (this.rutaActiva.routeConfig?.path === "agregar") {
      return;

    } else {
      this.rutaActiva.params
      .pipe(
        switchMap( ({id}) => this.personaService.obtenerPersona(id))                          // ({id}): Es el id de los parámetros de "this.rutaActiva.params"
      )
      .subscribe( (persona) => {
          this.persona = persona;
          this.form.setValue(persona);
      })
    }
  }

  validacion(campo: string): boolean {
    if (this.form.get(campo)?.errors && this.form.get(campo)?.touched)
      return true;
    else
      return false;
  }

  passwdMatch(): boolean {
    if (this.form.get('password')?.value == this.form.get('rPasswd')?.value)
      return true;
    else
      return false;
  }

  gestionarUsuario() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();                   // Esto provoca que aparezcan los mensajes de error si el formulario es inválido al ejecutarse el "submit"
      return;
    }

    this.persona = this.form.value;                   // Paso los datos del usuario a las propiedades de la persona para después editar o añadir (según corresponda)

    if (this.persona.id == "") {
      // Añadir usuario
      this.personaService.añadirPersona(this.persona)
      .subscribe( (persona) => {
        this.popUp(persona);
      })

    } else {
      // Modificación
      this.personaService.modificarPersona(this.persona)
      .subscribe( (persona) => {
        this.persona = persona;
        this.popUp(persona);
      })
    }
  }

  eliminar() {
    // Antes de eliminar, lanzar un mensaje de confirmación
    
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar a este usuario?',
      text: "Los cambios serán irreversibles",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: 'red',
      cancelButtonColor: '#BEAAFF',
      confirmButtonText: 'Sí'
    })
    .then((resultado) => {
      if (resultado.isConfirmed) {
        this.personaService.eliminarPersona(this.persona.id)
        .subscribe( () => {
          Swal.fire(
            'Usuario Eliminado',
            '',
            'success'
          )
          this.route.navigate(['/personas']);
        })
      }
    })
  }

  popUp(persona: Persona) {
    if (this.rutaActiva.routeConfig?.path === "agregar") {
      Swal.fire({
        title: 'Añadido',
        text: 'Usuario añadido con éxito',
        icon: 'success',
        imageUrl: `${persona.urlImagen}`,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: `${persona.usuario}`,
      })
      .then((resultado) => {
        if (resultado.isConfirmed == true) 
          this.route.navigate(['/personas']);
      })

    } else {
      Swal.fire({
        title: 'Editado',
        text: 'Usuario editado con éxito',
        imageUrl: `${persona.urlImagen}`,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: `${persona.usuario}`,
      })
      .then((resultado) => {
        if (resultado.isConfirmed == true) 
          this.route.navigate(['/personas']);
      })
    }
  }


}
