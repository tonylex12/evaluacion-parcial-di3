import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-ejercicio-2',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatListModule],
  templateUrl: './ejercicio-2.component.html',
  styleUrl: './ejercicio-2.component.css',
})
export class Ejercicio2Component {
  nota1: number = 14.5;
  nota2: number = 15;
  nota3: number = 16.5;
  nota4: number = 12.5;
  notaMasBaja: number = 0;
  promedio: number = 0;

  calcularPromedio() {
    const notas = [this.nota1, this.nota2, this.nota3, this.nota4];
    const notaMasBaja = Math.min(...notas);
    this.notaMasBaja = notaMasBaja;
    const notasFiltradas = notas.filter((nota) => nota !== notaMasBaja);
    this.promedio =
      notasFiltradas[0] * 0.2 +
      notasFiltradas[1] * 0.3 +
      notasFiltradas[2] * 0.5;
    return this.promedio;
  }
}
