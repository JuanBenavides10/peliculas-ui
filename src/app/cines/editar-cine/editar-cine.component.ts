import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from '../formulario-cines/formulario-cines.component';


@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({ transform: numberAttribute }) //transform -> convierte un tipo de dato a otro, en este caso convertimos a number
  id!: number


  cine: CineDTO = { id: 1, nombre: 'CinePlanet', latitud: -11.978699637154758, longitud: -77.01082050797496}

  guardarCambios(cine: CineCreacionDTO) {
    console.log('editar cine', cine);
  }
}
