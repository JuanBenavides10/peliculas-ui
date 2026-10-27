import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listado-peliculas', //Nombre del componente
  imports: [CurrencyPipe, DatePipe,ListadoGenericoComponent, MatButtonModule, MatIconModule], //Importaciones de otros componentes
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit { //clase principal del componente, implementa la interfaz OnInit para poder usar el método ngOnInit
 ngOnInit(): void { //Método que se ejecuta al iniciar el componente
 
  }

  @Input({required: true}) //Decorador que indica que la propiedad peliculas es un input del componente y es obligatorio
  peliculas!: any[]; //any nos dice que puese ser cualquier tipo de dato, en este caso es un arreglo de objetos

}
