import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({transform: numberAttribute }) //transform -> convierte un tipo de dato a otro, en este caso convertimos a number
  id!: number

  actor: ActorDTO = {id:1, nombre: 'Juanito Alcachofa', fechaNacimiento: new Date(1999,0,1)}

  guardarCambios(actor: ActorCreacionDTO) {
    console.log('Editando el actor', actor);
  }
}
