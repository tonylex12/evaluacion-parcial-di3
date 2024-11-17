import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-ejercicio-1',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatListModule],
  templateUrl: './ejercicio-1.component.html',
  styleUrl: './ejercicio-1.component.css',
})

// src/app/ejercicio-1/ejercicio-1.component.ts
export class Ejercicio1Component {
  horas: number = 5;
  minutos: number = 30;
  costoPorHora = 1500;
  costoTotal: number = 0;

  calcularCosto() {
    const totalHoras = this.horas + this.minutos / 60;
    this.costoTotal = totalHoras * this.costoPorHora;
    return this.costoTotal;
  }
}
