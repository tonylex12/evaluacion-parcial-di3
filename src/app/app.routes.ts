import { Routes } from '@angular/router';
import { Ejercicio1Component } from './ejercicio-1/ejercicio-1.component';
import { Ejercicio2Component } from './ejercicio-2/ejercicio-2.component';
import { Ejercicio3Component } from './ejercicio-3/ejercicio-3.component';
import { Ejercicio4Component } from './ejercicio-4/ejercicio-4.component';

export const routes: Routes = [
  { path: 'ejercicio-1', component: Ejercicio1Component },
  { path: 'ejercicio-2', component: Ejercicio2Component },
  { path: 'ejercicio-3', component: Ejercicio3Component },
  { path: 'ejercicio-4', component: Ejercicio4Component },
];
