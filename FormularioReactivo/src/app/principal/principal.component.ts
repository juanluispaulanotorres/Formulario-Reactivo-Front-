import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: [
    `
      div mat-spinner {
        position: absolute;
        left: 0;
        bottom: 0; 
        right: 0; 
        top: 0; 
        margin: auto;
      }
    `
  ]
})

export class PrincipalComponent implements OnInit {

  cargado: boolean;

  constructor() { 
    this.cargado = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargado = true;
    }, 1000);
  }

}
