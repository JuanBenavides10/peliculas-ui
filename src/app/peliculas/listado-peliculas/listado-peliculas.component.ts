import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';

@Component({
  selector: 'app-listado-peliculas', //Nombre del componente
  imports: [CurrencyPipe, DatePipe,ListadoGenericoComponent], //Importaciones necesarias para el componente
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit { //clase principal del componente, implementa la interfaz OnInit para poder usar el método ngOnInit
 ngOnInit(): void { //Método que se ejecuta al iniciar el componente
 
  }

  @Input({required: true}) //Decorador que indica que la propiedad peliculas es un input del componente y es obligatorio
  peliculas!: any[]; //any nos dice que puese ser cualquier tipo de dato, en este caso es un arreglo de objetos

  agregarPelicula() //Método 
  { 
    this.peliculas.push({
      titulo:'Inception',
      fechaLanzamiento: new Date('2010-07-16'),
      precio: 300.99
    })
  }

  remover(pelicula:any){
    const indice = this.peliculas.findIndex((peliculaActual : any) => peliculaActual.titulo === pelicula.titulo); //findIndex nos devuelve el índice del primer elemento que cumpla con la condición, en este caso que el título de la película sea igual al título de la película que se quiere eliminar
    this.peliculas.splice(indice, 1); //splice elimina un elemento del arreglo en el índice indicado
  }


}
