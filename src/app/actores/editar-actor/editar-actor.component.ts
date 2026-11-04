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

  actor: ActorDTO = {id:1, nombre: 'Juanito Alcachofa', fechaNacimiento: new Date(1999,0,1), foto: 'https://th.bing.com/th/id/OIP.92t1PPSF7mJ3v2OKvIOgNgHaEK?w=288&h=180&c=7&r=0&o=7&pid=1.7&rm=3'}

  guardarCambios(actor: ActorCreacionDTO) {
    console.log('Editando el actor', actor);
  }
}
