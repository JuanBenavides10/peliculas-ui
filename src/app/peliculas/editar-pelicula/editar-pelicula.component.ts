import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({ transform: numberAttribute }) //transform -> convierte un tipo de dato a otro, en este caso convertimos a number
  id!: number;

  pelicula: PeliculaDTO = { id: 1, titulo: 'Spider-Man', trailer: 'ABC', fechaLanzamiento: new Date('2026-11-09'), poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832' }


  generosSeleccionados: SelectorMultipleDTO[] = [
    { llave: 2, valor: 'Accion' }
  ];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 3, valor: 'Comedia' }
  ];

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log('editando pelicula', pelicula);
  }

}
