import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-ejercicio-3',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatListModule],
  templateUrl: './ejercicio-3.component.html',
  styleUrl: './ejercicio-3.component.css',
})
export class Ejercicio3Component {
  anioDeNacimiento: number = 2008;
  edad: number = 0;
  debeSacarDni: boolean | null = null;

  sacarDni() {
    const anioActual = new Date().getFullYear();
    this.edad = anioActual - this.anioDeNacimiento;

    if (this.edad >= 18) {
      this.debeSacarDni = true;
    }
    return this.debeSacarDni;
  }
}
