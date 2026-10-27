import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input , Output} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass], //Imports de otros componentes
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent  {

  @Input({required: true, transform: (valor:number) => Array(valor).fill(0)}) //transform -> convierte un tipo de dato a otro, en este caso number a array
  maximoRating! : number[];

  @Input() //entrada
  ratingSeleccionado = 0;

  @Output() //salida
  votado = new EventEmitter<number>(); // EventEmitter -> emite eventos

  ratingAnterior = 0;

  manejarMouseEnter(indice: number){
    this.ratingSeleccionado = indice + 1; //Se suma 1 porque el índice empieza en 0
  }

  manejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior; //Si hay un rating anterior, se mantiene
    }else{
      this.ratingSeleccionado = 0; //Si no hay un rating anterior, se resetea a 0
    }
  }

  manejarClick(indice: number){
    this.ratingSeleccionado = indice + 1; //Se suma 1 porque el índice empieza en 0
    this.ratingAnterior = this.ratingSeleccionado; //Se guarda el rating seleccionado como rating anterior

    this.votado.emit(this.ratingSeleccionado); //emitimos el evento enviando el rating seleccionado
  }
}
