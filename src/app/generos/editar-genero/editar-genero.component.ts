import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-genero',
  imports: [],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {

  @Input({transform: numberAttribute }) //transform -> convierte un tipo de dato a otro, en este caso convertimos a number
  id!: number

}
