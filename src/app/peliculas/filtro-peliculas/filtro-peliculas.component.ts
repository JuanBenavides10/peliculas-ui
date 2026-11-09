import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatCalendar],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent {

private formBuilder = inject(FormBuilder)

form = this.formBuilder.group({
  titulo : '',
  generoId: 0,
  proximosEstrenos: false,
  enCines: false
})

generos = [
  {id : 1, nombre: "Drama"},
  {id : 2, nombre: "Accion"},
  {id : 3, nombre: "Comedia"}
]

}
