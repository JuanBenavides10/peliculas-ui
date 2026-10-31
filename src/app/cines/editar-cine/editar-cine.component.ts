import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-cine',
  imports: [],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute }) //transform -> convierte un tipo de dato a otro, en este caso convertimos a number
  id!: number
}
