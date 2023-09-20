import { Component } from '@angular/core';
import { Estudiante } from '../estudiantes.model';

@Component({
  selector: 'app-tabla-estudiantes',
  templateUrl: './tabla-estudiantes.component.html',
  styleUrls: ['./tabla-estudiantes.component.css']
})
export class TablaEstudiantesComponent {
  estudiantes: Estudiante[] = [
    { nombre: 'Juan Perez', edad: 20, curso: 'Matemáticas' },
    { nombre: 'María López', edad: 22, curso: 'Historia' },
    { nombre: 'Juan Perez', edad: 20, curso: 'Matemáticas' },
    { nombre: 'María López', edad: 22, curso: 'Historia' },
    { nombre: 'Juan Perez', edad: 20, curso: 'Matemáticas' },
    { nombre: 'María López', edad: 22, curso: 'Historia' },
    // Agrega más estudiantes si lo deseas
  ];
}