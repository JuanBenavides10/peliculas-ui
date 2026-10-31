import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-actor',
  imports: [],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({transform: numberAttribute }) //transform -> convierte un tipo de dato a otro, en este caso convertimos a number
  id!: number
}
