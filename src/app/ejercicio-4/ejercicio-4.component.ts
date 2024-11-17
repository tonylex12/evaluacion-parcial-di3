import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-ejercicio-4',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatListModule],
  templateUrl: './ejercicio-4.component.html',
  styleUrl: './ejercicio-4.component.css',
})
export class Ejercicio4Component {
  letrasPorNumero: { [key: number]: string } = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    0: 'J',
  };

  numeroIngresado: number = 35;
  resultado: string = '';

  mostrarMensaje() {
    const numeroArray = this.numeroIngresado.toString().split('');
    this.resultado = numeroArray
      .map((numero) => this.letrasPorNumero[Number(numero)])
      .join('');
  }
}
